# ============================================================
# Japan Travel - Infrastructure as Code (Terraform)
# Platform: Microsoft Azure
# Author: Elgi Juldrievin - Kelompok Japan Travel
# Mata Kuliah: Cloud Computing - Universitas Palangka Raya
# ============================================================

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
  required_version = ">= 1.0"
}

provider "azurerm" {
  features {}
}

# ============================================================
# VARIABLES
# ============================================================

variable "resource_group_name" {
  description = "Nama resource group untuk seluruh resource proyek"
  type        = string
  default     = "japan-travel-rg"
}

variable "location" {
  description = "Region Azure untuk deployment resource"
  type        = string
  default     = "southeastasia"
}

variable "project_name" {
  description = "Nama proyek — digunakan sebagai prefix resource"
  type        = string
  default     = "japan-travel"
}

variable "db_admin_username" {
  description = "Username administrator database MySQL"
  type        = string
  default     = "admindb"
  sensitive   = true
}

variable "db_admin_password" {
  description = "Password administrator database MySQL"
  type        = string
  sensitive   = true
}

# ============================================================
# LOCALS
# ============================================================

locals {
  tags = {
    Project     = "Japan Travel"
    Team        = "Kelompok Cloud Computing UPR"
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}

# ============================================================
# RESOURCE GROUP
# ============================================================

resource "azurerm_resource_group" "main" {
  name     = var.resource_group_name
  location = var.location
  tags     = local.tags
}

# ============================================================
# NETWORKING — Virtual Network & Subnets
# ============================================================

resource "azurerm_virtual_network" "main" {
  name                = "${var.project_name}-vnet"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  address_space       = ["10.0.0.0/16"]
  tags                = local.tags
}

resource "azurerm_subnet" "public" {
  name                 = "subnet-public"
  resource_group_name  = azurerm_resource_group.main.name
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes     = ["10.0.1.0/24"]
}

resource "azurerm_subnet" "private" {
  name                 = "subnet-private"
  resource_group_name  = azurerm_resource_group.main.name
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes     = ["10.0.2.0/24"]
}

# ============================================================
# SECURITY — Network Security Group
# ============================================================

resource "azurerm_network_security_group" "main" {
  name                = "${var.project_name}-nsg"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  tags                = local.tags

  security_rule {
    name                       = "Allow-HTTP"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "80"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "Allow-HTTPS"
    priority                   = 110
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "443"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}

resource "azurerm_subnet_network_security_group_association" "public" {
  subnet_id                 = azurerm_subnet.public.id
  network_security_group_id = azurerm_network_security_group.main.id
}

# ============================================================
# COMPUTE — App Service Plan & Web Apps
# ============================================================

resource "azurerm_service_plan" "main" {
  name                = "${var.project_name}-plan"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  os_type             = "Linux"
  sku_name            = "F1"
  tags                = local.tags
}

# Frontend — React.js
resource "azurerm_linux_web_app" "frontend" {
  name                = "${var.project_name}-app"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  service_plan_id     = azurerm_service_plan.main.id
  https_only          = true
  tags                = local.tags

  site_config {
    always_on = false
    application_stack {
      node_version = "22-lts"
    }
    app_command_line = "npx serve -s /home/site/wwwroot/dist -l 8080"
  }

  app_settings = {
    WEBSITE_RUN_FROM_PACKAGE = "0"
    SCM_DO_BUILD_DURING_DEPLOYMENT = "false"
  }
}

# Backend — Node.js/Express API
resource "azurerm_linux_web_app" "backend" {
  name                = "${var.project_name}-api"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  service_plan_id     = azurerm_service_plan.main.id
  https_only          = true
  tags                = local.tags

  site_config {
    always_on = false
    application_stack {
      node_version = "22-lts"
    }
    app_command_line = "node server.js"
  }

  app_settings = {
    DB_HOST = azurerm_mysql_flexible_server.main.fqdn
    DB_USER = var.db_admin_username
    DB_PASSWORD = var.db_admin_password
    DB_NAME = "japantravel"
    DB_PORT = "3306"
    PORT    = "8080"
  }
}

# ============================================================
# DATABASE — Azure MySQL Flexible Server
# ============================================================

resource "azurerm_mysql_flexible_server" "main" {
  name                   = "${var.project_name}-db"
  resource_group_name    = azurerm_resource_group.main.name
  location               = azurerm_resource_group.main.location
  administrator_login    = var.db_admin_username
  administrator_password = var.db_admin_password
  sku_name               = "B_Standard_B1ms"
  version                = "8.0.21"
  tags                   = local.tags

  storage {
    size_gb = 20
  }

  backup_retention_days = 7

  high_availability {
    mode = "Disabled"
  }
}

resource "azurerm_mysql_flexible_database" "main" {
  name                = "japantravel"
  resource_group_name = azurerm_resource_group.main.name
  server_name         = azurerm_mysql_flexible_server.main.name
  charset             = "utf8mb3"
  collation           = "utf8mb3_general_ci"
}

resource "azurerm_mysql_flexible_server_firewall_rule" "allow_azure" {
  name                = "AllowAzureServices"
  resource_group_name = azurerm_resource_group.main.name
  server_name         = azurerm_mysql_flexible_server.main.name
  start_ip_address    = "0.0.0.0"
  end_ip_address      = "0.0.0.0"
}

# ============================================================
# STORAGE — Blob Storage untuk Static Website
# ============================================================

resource "azurerm_storage_account" "main" {
  name                     = "japantravelstorage"
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
  enable_https_traffic_only = true
  tags                     = local.tags

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }
}

# ============================================================
# LOAD BALANCER
# ============================================================

resource "azurerm_public_ip" "lb" {
  name                = "${var.project_name}-lb-ip"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  allocation_method   = "Static"
  sku                 = "Standard"
  tags                = local.tags
}

resource "azurerm_lb" "main" {
  name                = "${var.project_name}-lb"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  sku                 = "Standard"
  tags                = local.tags

  frontend_ip_configuration {
    name                 = "lb-frontend"
    public_ip_address_id = azurerm_public_ip.lb.id
  }
}

resource "azurerm_lb_backend_address_pool" "main" {
  loadbalancer_id = azurerm_lb.main.id
  name            = "lb-backend"
}

resource "azurerm_lb_probe" "http" {
  loadbalancer_id = azurerm_lb.main.id
  name            = "http-probe"
  protocol        = "Http"
  port            = 80
  request_path    = "/"
}

resource "azurerm_lb_rule" "http" {
  loadbalancer_id                = azurerm_lb.main.id
  name                           = "http-rule"
  protocol                       = "Tcp"
  frontend_port                  = 80
  backend_port                   = 80
  frontend_ip_configuration_name = "lb-frontend"
  backend_address_pool_ids       = [azurerm_lb_backend_address_pool.main.id]
  probe_id                       = azurerm_lb_probe.http.id
}

# ============================================================
# MONITORING — Azure Monitor & Autoscale
# ============================================================

resource "azurerm_monitor_autoscale_setting" "main" {
  name                = "${var.project_name}-autoscale"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  target_resource_id  = azurerm_service_plan.main.id
  enabled             = false
  tags                = local.tags

  profile {
    name = "default"

    capacity {
      default = 1
      minimum = 1
      maximum = 3
    }

    rule {
      metric_trigger {
        metric_name        = "CpuPercentage"
        metric_resource_id = azurerm_service_plan.main.id
        operator           = "GreaterThan"
        statistic          = "Average"
        threshold          = 70
        time_aggregation   = "Average"
        time_grain         = "PT1M"
        time_window        = "PT5M"
      }
      scale_action {
        direction = "Increase"
        type      = "ChangeCount"
        value     = 1
        cooldown  = "PT5M"
      }
    }

    rule {
      metric_trigger {
        metric_name        = "CpuPercentage"
        metric_resource_id = azurerm_service_plan.main.id
        operator           = "LessThan"
        statistic          = "Average"
        threshold          = 30
        time_aggregation   = "Average"
        time_grain         = "PT1M"
        time_window        = "PT5M"
      }
      scale_action {
        direction = "Decrease"
        type      = "ChangeCount"
        value     = 1
        cooldown  = "PT5M"
      }
    }
  }
}

resource "azurerm_monitor_action_group" "main" {
  name                = "${var.project_name}-alerts"
  resource_group_name = azurerm_resource_group.main.name
  short_name          = "JTAlerts"
  tags                = local.tags

  email_receiver {
    name          = "admin"
    email_address = "elgijuldrievin36@mhs.eng.upr.ac.id"
  }
}

resource "azurerm_monitor_metric_alert" "http_errors" {
  name                = "alert-http-errors"
  resource_group_name = azurerm_resource_group.main.name
  scopes              = [azurerm_linux_web_app.frontend.id]
  description         = "Alert jika HTTP 5xx error lebih dari 5 dalam 5 menit"
  severity            = 2
  window_size         = "PT5M"
  frequency           = "PT1M"
  tags                = local.tags

  criteria {
    metric_namespace = "Microsoft.Web/sites"
    metric_name      = "Http5xx"
    aggregation      = "Count"
    operator         = "GreaterThan"
    threshold        = 5
  }

  action {
    action_group_id = azurerm_monitor_action_group.main.id
  }
}

resource "azurerm_monitor_metric_alert" "response_time" {
  name                = "alert-response-time"
  resource_group_name = azurerm_resource_group.main.name
  scopes              = [azurerm_linux_web_app.frontend.id]
  description         = "Alert jika response time lebih dari 30 detik"
  severity            = 2
  window_size         = "PT5M"
  frequency           = "PT1M"
  tags                = local.tags

  criteria {
    metric_namespace = "Microsoft.Web/sites"
    metric_name      = "AverageResponseTime"
    aggregation      = "Average"
    operator         = "GreaterThan"
    threshold        = 30
  }

  action {
    action_group_id = azurerm_monitor_action_group.main.id
  }
}

resource "azurerm_monitor_metric_alert" "availability" {
  name                = "alert-availability"
  resource_group_name = azurerm_resource_group.main.name
  scopes              = [azurerm_linux_web_app.frontend.id]
  description         = "Alert jika tidak ada request masuk selama 15 menit"
  severity            = 2
  window_size         = "PT15M"
  frequency           = "PT5M"
  tags                = local.tags

  criteria {
    metric_namespace = "Microsoft.Web/sites"
    metric_name      = "Requests"
    aggregation      = "Count"
    operator         = "LessThan"
    threshold        = 1
  }

  action {
    action_group_id = azurerm_monitor_action_group.main.id
  }
}

# ============================================================
# OUTPUTS
# ============================================================

output "frontend_url" {
  description = "URL website frontend Japan Travel"
  value       = "https://${azurerm_linux_web_app.frontend.default_hostname}"
}

output "backend_url" {
  description = "URL backend API Japan Travel"
  value       = "https://${azurerm_linux_web_app.backend.default_hostname}"
}

output "storage_website_url" {
  description = "URL static website dari Blob Storage"
  value       = azurerm_storage_account.main.primary_web_endpoint
}

output "database_host" {
  description = "Host Azure MySQL Flexible Server"
  value       = azurerm_mysql_flexible_server.main.fqdn
}

output "resource_group_name" {
  description = "Nama resource group"
  value       = azurerm_resource_group.main.name
}

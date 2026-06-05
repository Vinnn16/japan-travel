# ============================================================
# outputs.tf — Output setelah terraform apply
# Japan Travel Cloud Project
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
  description = "URL static website dari Azure Blob Storage"
  value       = azurerm_storage_account.main.primary_web_endpoint
}

output "database_host" {
  description = "Hostname Azure MySQL Flexible Server"
  value       = azurerm_mysql_flexible_server.main.fqdn
}

output "database_name" {
  description = "Nama database"
  value       = azurerm_mysql_flexible_database.main.name
}

output "resource_group_name" {
  description = "Nama resource group"
  value       = azurerm_resource_group.main.name
}

output "vnet_id" {
  description = "ID Virtual Network"
  value       = azurerm_virtual_network.main.id
}

output "load_balancer_ip" {
  description = "IP publik Load Balancer"
  value       = azurerm_public_ip.lb.ip_address
}

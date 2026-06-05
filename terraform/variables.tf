# ============================================================
# variables.tf — Definisi variabel untuk infrastruktur
# Japan Travel Cloud Project
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

  validation {
    condition     = contains(["southeastasia", "eastasia", "eastus", "westeurope"], var.location)
    error_message = "Region yang diizinkan: southeastasia, eastasia, eastus, westeurope."
  }
}

variable "project_name" {
  description = "Nama proyek — digunakan sebagai prefix untuk semua resource"
  type        = string
  default     = "japan-travel"
}

variable "app_service_sku" {
  description = "SKU tier untuk App Service Plan (F1=Free, B1=Basic, S1=Standard)"
  type        = string
  default     = "F1"
}

variable "db_admin_username" {
  description = "Username administrator untuk Azure MySQL Flexible Server"
  type        = string
  default     = "admindb"
  sensitive   = true
}

variable "db_admin_password" {
  description = "Password administrator untuk Azure MySQL Flexible Server"
  type        = string
  sensitive   = true
}

variable "db_sku_name" {
  description = "SKU untuk Azure MySQL Flexible Server"
  type        = string
  default     = "B_Standard_B1ms"
}

variable "db_storage_gb" {
  description = "Ukuran storage database dalam GB"
  type        = number
  default     = 20
}

variable "db_backup_retention_days" {
  description = "Jumlah hari retensi backup database"
  type        = number
  default     = 7
}

variable "alert_email" {
  description = "Alamat email penerima notifikasi alert"
  type        = string
  default     = "elgijuldrievin36@mhs.eng.upr.ac.id"
}

variable "autoscale_min_count" {
  description = "Jumlah minimum instance untuk autoscaling"
  type        = number
  default     = 1
}

variable "autoscale_max_count" {
  description = "Jumlah maksimum instance untuk autoscaling"
  type        = number
  default     = 3
}

variable "autoscale_cpu_scale_out" {
  description = "Threshold CPU (%) untuk scale out (tambah instance)"
  type        = number
  default     = 70
}

variable "autoscale_cpu_scale_in" {
  description = "Threshold CPU (%) untuk scale in (kurangi instance)"
  type        = number
  default     = 30
}

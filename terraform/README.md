# Japan Travel — Infrastructure as Code (Terraform)

Konfigurasi Terraform untuk infrastruktur cloud Microsoft Azure proyek Japan Travel.
Mata Kuliah Cloud Computing — Teknik Informatika Universitas Palangka Raya.

## Struktur File

```
terraform/
├── main.tf                  # Resource utama (networking, compute, database, monitoring)
├── variables.tf             # Definisi semua variabel
├── outputs.tf               # Output setelah deployment
├── terraform.tfvars.example # Contoh file variabel (salin ke terraform.tfvars)
├── .gitignore               # File yang tidak di-commit ke Git
└── README.md                # Dokumentasi ini
```

## Resource yang Dikelola

| Resource | Nama | Keterangan |
|----------|------|------------|
| Resource Group | japan-travel-rg | Container semua resource |
| Virtual Network | japan-travel-vnet | Jaringan virtual 10.0.0.0/16 |
| Subnet Public | subnet-public | 10.0.1.0/24 |
| Subnet Private | subnet-private | 10.0.2.0/24 |
| Network Security Group | japan-travel-nsg | Allow HTTP & HTTPS |
| App Service Plan | japan-travel-plan | Free tier (F1) Linux |
| Web App Frontend | japan-travel-app | React.js website |
| Web App Backend | japan-travel-api | Node.js/Express API |
| MySQL Flexible Server | japan-travel-db | Database MySQL 8.0 |
| Storage Account | japantravelstorage | Blob Storage static website |
| Load Balancer | japan-travel-lb | Standard SKU |
| Autoscale Settings | japan-travel-autoscale | CPU-based scaling (min:1, max:3) |
| Monitor Action Group | japan-travel-alerts | Notifikasi email |
| Metric Alert (HTTP) | alert-http-errors | HTTP 5xx > 5 dalam 5 menit |
| Metric Alert (Response) | alert-response-time | Avg response > 30 detik |
| Metric Alert (Availability) | alert-availability | Requests < 1 dalam 15 menit |

## Cara Penggunaan

### 1. Install Terraform
Download dari https://developer.hashicorp.com/terraform/downloads

### 2. Login Azure CLI
```bash
az login --tenant 2505937c-409d-469d-9952-778fdf0a1d89
az account set --subscription "27880884-ef10-4408-909f-c2873f81afd0"
```

### 3. Siapkan variabel
```bash
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars sesuai kebutuhan
```

### 4. Inisialisasi Terraform
```bash
terraform init
```

### 5. Cek rencana deployment
```bash
terraform plan
```

### 6. Deploy infrastruktur
```bash
terraform apply
```

### 7. Lihat output
```bash
terraform output
```

### 8. Hapus semua resource (setelah nilai keluar)
```bash
terraform destroy
```

## Catatan Penting

- File `terraform.tfvars` mengandung credentials — **jangan di-commit ke Git**
- Autoscaling dikonfigurasi tapi tidak aktif karena Free tier F1 tidak mendukung
- CDN tidak dapat diimplementasikan karena dibatasi untuk akun Azure Students
- Untuk mengaktifkan autoscaling, ganti `app_service_sku` ke `"S1"` di terraform.tfvars

## Anggota Kelompok

| Nama | NIM | Peran |
|------|-----|-------|
| Elgi Juldrievin | 213030503170 | Cloud Architect & DevOps |
| Melisa | - | Backend Developer |
| Yedija | - | Frontend Developer |
| Okta | - | Security Engineer |

**Dosen:** Geges Septiawan  
**Program Studi:** Teknik Informatika — Universitas Palangka Raya  
**Tahun:** 2026

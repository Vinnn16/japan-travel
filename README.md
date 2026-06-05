# Japan Travel — Frontend

![Azure](https://img.shields.io/badge/Microsoft_Azure-0089D6?style=flat&logo=microsoft-azure&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

Website informasi destinasi wisata Jepang yang dibangun dengan React.js dan di-deploy ke Microsoft Azure. Proyek ini merupakan bagian dari Final Project Mata Kuliah Cloud Computing — Teknik Informatika Universitas Palangka Raya.

##  Live Demo

| Layanan | URL |
|---------|-----|
| **Frontend (App Service)** | https://japan-travel-app.azurewebsites.net |
| **Frontend (Blob Storage)** | https://japantravelstorage.z23.web.core.windows.net |
| **Backend API** | https://japan-travel-api.azurewebsites.net |

##  Arsitektur Cloud

```
Browser → Azure App Service (React)
               ↓
         Azure App Service (Node.js API)
               ↓
         Azure Database for MySQL
```

**Layanan Azure yang digunakan:**
-  Azure App Service — Hosting frontend & backend
-  Azure Database for MySQL Flexible Server
-  Azure Virtual Network (subnet publik & privat)
-  Network Security Group (Allow HTTP/HTTPS)
-  Azure Blob Storage — Static website hosting
-  Azure Load Balancer (Standard SKU)
-  Azure Monitor — Monitoring & alerting
-  Azure IAM — Identity & Access Management

##  Teknologi

- **Framework:** React.js 18 + Vite
- **UI Library:** React Bootstrap + Tailwind CSS
- **Routing:** React Router DOM v6
- **State Management:** React Hooks

##  Struktur Folder

```
japan-travel/
├── src/
│   ├── components/       # Komponen reusable (Navigasi, Footer, dll)
│   ├── pages/            # Halaman (Home, Destinations, About, Reviews, Contact)
│   └── styles/           # File CSS per komponen
├── terraform/            # Infrastructure as Code (Terraform)
│   ├── main.tf           # Resource Azure
│   ├── variables.tf      # Definisi variabel
│   ├── outputs.tf        # Output deployment
│   └── README.md         # Panduan Terraform
├── public/               # Asset statis
├── deploy.sh             # Script deployment ke Azure
├── .gitignore
├── package.json
└── vite.config.js
```

##  Cara Menjalankan Lokal

```bash
# Clone repository
git clone https://github.com/Vinnn16/japan-travel.git
cd japan-travel

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

##  Halaman Website

| Halaman | Route | Deskripsi |
|---------|-------|-----------|
| Home | `/` | Hero, destinasi unggulan, FAQ, review |
| Destinations | `/destinations` | 8 destinasi wisata lengkap |
| About | `/about` | Tentang Japan Travel |
| Reviews | `/review` | Ulasan pelanggan + form input |
| Contact | `/contact` | Form kontak |

##  Anggota Kelompok

| Nama | NIM | Peran |
|------|-----|-------|
| Elgi Juldrievin | 213030503170 | Cloud Architect & DevOps Engineer |
| Melisa | - | Backend Developer |
| Yedija | - | Frontend Developer |
| Okta | - | Security Engineer |

**Dosen Pengampu:** Geges Septiawan  
**Program Studi:** Teknik Informatika — Universitas Palangka Raya  
**Tahun:** 2026

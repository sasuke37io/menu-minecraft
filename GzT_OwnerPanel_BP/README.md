# GzT Owner Panel

## Overview

GzT Owner Panel adalah addon Minecraft Bedrock yang menyediakan admin control panel modern untuk Operator dan player yang diberi akses.

**Target:** Minecraft Bedrock 1.26.x

## Features

### 1. VISUAL
- **FullBright** - Pencahayaan maksimal untuk melihat dalam gelap
- **Ore Glow** - Membuat ore bercahaya sesuai jenis (Diamond=Cyan, Gold=Kuning, dll)
- **X-Ray** - Menampilkan blok penting (dengan shortcut V/B)
- **Player ESP** - Marker dan nama player
- **Map UI** - Peta mini di pojok kanan atas
- **Last Death** - Marker lokasi kematian terakhir

### 2. WORLD
- **Set Region** - Membuat region custom dengan beacon marker
- **Region List** - Mengelola region yang sudah dibuat

### 3. PLAYER
- **Give Speed** - Memberikan efek speed ke player
- **Fast TP** - Teleport cepat ke player lain
- **Player Monitor** - Memantau posisi dan status player
- **Player List** - Daftar player online

### 4. ADMIN
- **Access Manager** - Memberikan akses panel ke player lain

## Access System

### Prioritas Akses
1. **Minecraft Operator** → Otomatis akses
2. **Owner** (tag `gzt_owner`) → Otomatis akses
3. **Player dengan tag `gzt_admin_access`** → Dari Access Manager
4. **Player biasa** → Tidak akses

## Commands

### Main Command
```
/gzt:open
```
- Membuka panel utama
- Hanya untuk operator/yang diberi akses
- Tidak memerlukan cheats

### X-Ray Shortcuts (dari panel)
- `V` → X-Ray ON
- `B` → X-Ray OFF

## Installation

1. Extract `GzT_OwnerPanel_BP.mcpack` dan `GzT_OwnerPanel_RP.mcpack`
2. Import ke Minecraft Bedrock
3. Aktifkan di world settings
4. Gunakan `/gzt:open` untuk membuka panel

## File Structure

```
GzT_OwnerPanel/
├── GzT_OwnerPanel_BP/
│   ├── manifest.json
│   ├── scripts/
│   │   └── main.js
│   └── functions/
│       └── commands.json
└── GzT_OwnerPanel_RP/
    ├── manifest.json
    └── ui/
        └── gzt_panel.json
```

## Notes

- Semua fitur bersifat **per-user** (tidak terlihat player lain)
- Script API v1.26.x compatible
- Fallback untuk fitur yang tidak didukung API

## Version

**v1.0.0** - Initial Release

## Author

GzT Developer Team

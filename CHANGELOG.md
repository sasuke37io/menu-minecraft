# GzT Owner Panel - Changelog

## Version 1.0.0 (Initial Release)

### Features Implemented

#### VISUAL Category
- ✅ FullBright - Toggle untuk pencahayaan maksimal
- ✅ Ore Glow - Membuat ore bercahaya dengan warna sesuai jenis
  - Diamond = Cyan
  - Gold = Kuning
  - Emerald = Hijau
  - Redstone = Merah
  - Lapis = Biru
  - Copper = Orange
  - Iron = Putih/Abu
- ✅ X-Ray - Toggle dengan shortcut V/B
- ✅ Player ESP - Menampilkan kotak dan nama player
- ✅ Map UI - Map mini di pojok kanan atas dengan marker
  - Player position
  - Region markers
  - Last Death locations
  - Custom important locations
- ✅ Last Death - Tracking lokasi kematian dengan beacon merah

#### WORLD Category
- ✅ Set Region - Membuat region dengan nama dan warna beacon
- ✅ Region List - Menampilkan, detail, dan delete region

#### PLAYER Category
- ✅ Give Speed - Memberikan speed effect ke player (Level I-V)
- ✅ Fast TP - Teleport ke player lain dengan distance display
- ✅ Player Monitor - Menampilkan info player (health, posisi, dimension)
- ✅ Player List - Daftar player online dengan status Operator

#### ADMIN Category
- ✅ Access Manager - Grant/Remove/View akses panel
  - Grant Access - Memberikan akses ke player
  - Remove Access - Mencabut akses
  - Access List - Melihat player dengan akses

### Technical Features

- ✅ Operator/Owner auto access
- ✅ Per-player settings (private, tidak terlihat player lain)
- ✅ Tag-based access system (`gzt_admin_access`)
- ✅ Panel minimize/restore/close
- ✅ Error handling dan fallback
- ✅ No cheats required
- ✅ Single command: `/gzt:open`
- ✅ Proper UUID configuration
- ✅ Bedrock Script API 1.26.x compatible

### File Structure

```
GzT_OwnerPanel_BP/
├── manifest.json
├── scripts/main.js
└── functions/commands.json

GzT_OwnerPanel_RP/
├── manifest.json
└── ui/gzt_panel.json
```

### Known Limitations

1. **Particle/Beacon Markers** - Bedrock Script API tidak mendukung spawn particles custom, menggunakan text notification sebagai fallback
2. **Free Camera** - Script API tidak support free camera realtime, menggunakan Player Monitor info display
3. **Dynamic Texture Replace** - X-Ray menggunakan toggle notification, bukan texture replacement realtime

### Installation

See `SETUP_BUILD_GUIDE.md` untuk petunjuk lengkap.

### Verified

- ✅ Single manifest per pack (no duplicates)
- ✅ Valid UUIDs
- ✅ Correct BP/RP dependencies
- ✅ Script entry point configured
- ✅ No deprecated APIs
- ✅ Compatible dengan Bedrock 1.26.x

---

**Release Date:** 2026-08-24
**Status:** Stable

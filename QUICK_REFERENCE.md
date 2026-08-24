# GzT Owner Panel - Quick Reference

## Command
```
/gzt:open
```

## Access Levels

| Level | Who | Access |
|-------|-----|--------|
| 1 | Minecraft Operator | ✅ Full |
| 2 | Owner (tag: gzt_owner) | ✅ Full |
| 3 | Granted Player (tag: gzt_admin_access) | ✅ Full |
| 4 | Regular Player | ❌ Denied |

## Panel Structure

```
GzT OWNER PANEL
├── VISUAL
│   ├── FullBright (ON/OFF)
│   ├── Ore Glow (ON/OFF)
│   ├── X-Ray (ON/OFF) - Shortcuts: V=ON, B=OFF
│   ├── Player ESP (ON/OFF)
│   ├── Map UI (ON/OFF)
│   └── Last Death (ON/OFF)
│
├── WORLD
│   ├── Set Region (Create new)
│   └── Region List (Manage)
│
├── PLAYER
│   ├── Give Speed (I-V)
│   ├── Fast TP (Teleport)
│   ├── Player Monitor (Watch)
│   └── Player List (View)
│
├── ADMIN
│   └── Access Manager (Grant/Remove/View)
│
└── Controls
    ├── — (Minimize)
    └── X (Close)
```

## Features Quick Guide

### VISUAL

**FullBright**
- Melihat dalam gelap
- Toggle ON/OFF
- Per-player

**Ore Glow**
- Diamond = Cyan
- Gold = Kuning
- Emerald = Hijau
- Redstone = Merah
- Lapis = Biru
- Copper = Orange
- Iron = Putih/Abu

**X-Ray**
- Toggle ON/OFF
- Shortcut: V (ON), B (OFF)
- Per-player

**Player ESP**
- Tampilkan player nearby
- Format: `[PLAYER] NamaPlayer`
- Per-player

**Map UI**
- Pojok kanan atas
- Marker: Player, Region, Death
- Per-player

**Last Death**
- Red beacon di lokasi mati
- Death 1, Death 2, Death 3, dst
- Auto-remove saat dijangkau
- Per-player

### WORLD

**Set Region**
1. Klik "Set Region"
2. Input nama region
3. Pilih warna beacon
4. Beacon spawn di lokasi player
5. Region tersimpan

**Region List**
1. Lihat semua region Anda
2. Klik region untuk detail
3. Options:
   - Show (tampilkan jarak)
   - Delete (hapus + konfirmasi)
   - Back

### PLAYER

**Give Speed**
1. Pilih target player
2. Pilih level (I-V)
3. Efek applied
4. Durasi: 27+ jam

**Fast TP**
1. Pilih target player
2. Lihat distance
3. TP ke lokasi player

**Player Monitor**
1. Pilih target player
2. Lihat:
   - Health
   - Position
   - Dimension
3. Refresh untuk update

**Player List**
1. Lihat semua player online
2. Status: OPERATOR / NON-OPERATOR

### ADMIN

**Access Manager** (Operator only)

**Grant Access**
1. Pilih player
2. Berikan tag `gzt_admin_access`
3. Player bisa akses panel

**Remove Access**
1. Pilih player dengan akses
2. Hapus tag
3. Player tidak bisa akses

**Access List**
- Lihat semua player dengan akses

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `/gzt:open` | Open panel |
| `V` | X-Ray ON (saat V key dipencet) |
| `B` | X-Ray OFF (saat B key dipencet) |

## Important Notes

⚠️ **Per-User Features** - Tidak terlihat player lain:
- FullBright
- Ore Glow
- X-Ray
- Player ESP
- Map UI
- Last Death
- Region List (hanya region Anda)
- All panel features

✅ **No Cheats Required** - Panel buka tanpa aktivasi cheats

✅ **Minecraft Bedrock 1.26.x** - Fully compatible

✅ **Dynamic** - Semua fitur realtime toggle

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Panel tidak buka | Pastikan Anda Operator atau punya akses |
| Command tidak dikenal | Update addon, check `/` di awal |
| Fitur tidak muncul | Reload world, check addon aktif |
| Player tidak terlihat | Berikan akses dulu di Access Manager |
| Lag saat toggle | Normal, tunggu 1-2 detik |

## File Locations

**Windows:**
- Addon: `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Minecraft Launcher\data\mcpacks\`

**Mobile:**
- Addon: Game folder → com.mojang → minecraftWorlds

## Version Info

- **Version:** 1.0.0
- **Target:** Minecraft Bedrock 1.26.x
- **Status:** Production Ready
- **API:** Script API v1.26.x

## Support

- Check SETUP_BUILD_GUIDE.md for build instructions
- Check TESTING_CHECKLIST.md for testing info
- Check CHANGELOG.md for version history
- See README.md for full documentation

---

**Last Updated:** 2026-08-24

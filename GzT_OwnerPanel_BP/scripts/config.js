/**
 * GzT Owner Panel - Configuration File
 * Contains constants and settings that can be customized
 */

// ========================
// COMMAND CONFIGURATION
// ========================
const CONFIG = {
  // Main command
  COMMAND: {
    namespace: "gzt",
    name: "open",
    requiresOp: true,
    cheatsRequired: false
  },

  // ========================
  // UI CONFIGURATION
  // ========================
  UI: {
    title: "GzT OWNER PANEL",
    subtitle: "Modern Admin Control Panel",
    headerColor: "#FFD700", // Gold
    panelWidth: 256,
    panelHeight: 320,
    buttonWidth: 240,
    buttonHeight: 30
  },

  // ========================
  // TAGS CONFIGURATION
  // ========================
  TAGS: {
    operator: "gzt_operator",
    adminAccess: "gzt_admin_access",
    owner: "gzt_owner"
  },

  // ========================
  // FEATURE CONFIGURATION
  // ========================
  FEATURES: {
    fullBright: {
      enabled: true,
      default: false
    },
    oreGlow: {
      enabled: true,
      default: false,
      colors: {
        diamond: "cyan",
        gold: "yellow",
        emerald: "green",
        redstone: "red",
        lapis: "blue",
        copper: "orange",
        iron: "white"
      }
    },
    xray: {
      enabled: true,
      default: false,
      shortcutON: "v",
      shortcutOFF: "b"
    },
    playerESP: {
      enabled: true,
      default: false,
      showName: true,
      showBox: true
    },
    mapUI: {
      enabled: true,
      default: false,
      position: "topRight",
      showPlayerMarker: true,
      showRegionMarkers: true,
      showDeathMarkers: true
    },
    lastDeath: {
      enabled: true,
      default: false,
      beaconColor: "red",
      maxDeathMarkers: 10
    }
  },

  // ========================
  // REGION CONFIGURATION
  // ========================
  REGIONS: {
    maxPerPlayer: 50,
    beaconColors: [
      "cyan",
      "blue",
      "yellow",
      "green",
      "orange",
      "purple",
      "white"
    ],
    reservedColor: "red" // Red reserved for Last Death
  },

  // ========================
  // PLAYER MANAGEMENT
  // ========================
  PLAYER: {
    speedMaxLevel: 5,
    speedDuration: 1000000, // ticks (27+ hours)
    maxMonitorRefresh: 10, // seconds
    maxDistanceDisplay: 999 // blocks
  },

  // ========================
  // ACCESS SYSTEM
  // ========================
  ACCESS: {
    autoOperator: true,
    autoOwner: true,
    requireTag: true,
    tagName: "gzt_admin_access"
  },

  // ========================
  // MESSAGES
  // ========================
  MESSAGES: {
    panelTitle: "§aGzT Owner Panel",
    featureToggle: (feature, status) => `§a${feature}: ${status ? "§aON" : "§cOFF"}`,
    noAccess: "§c✗ You don't have access to this panel.",
    regionCreated: (name, x, y, z) => `§a✓ Region "§l${name}§r§a" created at §l${x} ${y} ${z}`,
    regionDeleted: "§a✓ Region deleted.",
    accessGranted: (player) => `§a✓ Access granted to §l${player}`,
    accessRevoked: (player) => `§c✓ Access removed from §l${player}`,
    speedApplied: (player, level) => `§a✓ Speed §l${level}§r§a applied to §l${player}`,
    teleported: (player) => `§a✓ Teleported to §l${player}`,
    error: (msg) => `§cError: ${msg}`
  },

  // ========================
  // LIMITS & SAFETY
  // ========================
  LIMITS: {
    maxFormResponses: 1000,
    formTimeoutSeconds: 300,
    maxPlayersPerList: 100,
    maxRegionsDisplay: 50
  },

  // ========================
  // DEBUG MODE
  // ========================
  DEBUG: {
    enabled: false,
    logToConsole: true,
    logToChat: false,
    verboseErrors: true
  }
};

// Export untuk digunakan di main.js
// Uncomment jika menggunakan module system
// export { CONFIG };

// Atau gunakan global
// window.GZT_CONFIG = CONFIG;

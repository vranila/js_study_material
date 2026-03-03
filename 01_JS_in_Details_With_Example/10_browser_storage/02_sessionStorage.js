// ============================================
// sessionStorage
// ============================================
// Similar to localStorage but:
//
// - Data persists only per tab session
// - Cleared when tab is closed
// - Same API as localStorage
sessionStorage.setItem("sessionId", "ABC123");

console.log(sessionStorage.getItem("sessionId"));

sessionStorage.removeItem("sessionId");

// ----------------------------------------
// Use case examples:
// - Temporary login state
// - Multi-step form progress
// - Per-tab isolated data
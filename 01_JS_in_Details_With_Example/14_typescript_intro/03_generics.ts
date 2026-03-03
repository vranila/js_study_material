// ============================================
// Generics
// ============================================

function identity<T>(value: T): T {
  return value;
}

let result = identity<string>("Hello");
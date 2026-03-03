// ============================================
// Interfaces
// ============================================

interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}

const user2: User = {
  name: "John",
  age: 30
};
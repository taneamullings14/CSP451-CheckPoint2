// src/services/authService.js

/**
 * Simulates user authentication logic.
 * This exists to demonstrate separation of concerns
 * and basic login validation behavior.
 */

export function authenticationUser(username, password) {
  if (!username || !password) {
    return {
      success: false, 
      message: "Username and password are required"
    };
  }
 
  if (username.length < 3) {
    return {
      success: false,
      message: "Username must be at least 3 characters"
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters"
    };
  }

  return {
    success: true,
    message: "Authentication successful"
  };
}

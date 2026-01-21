// src/services/authService.js

/**
 * Simulates user authentication logic.
 * This exists to demonstrate separation of concerns
 * and basic login validation behavior.
 */

export function authenticateUser(username, password) {
  if (!username || !password) {
    return {
      success: false, 
      message: "Username and password are required"
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Authentication successful"
    };
  }

// src/db/database.js

/**
 * Simulates a database connection.
 * This module exists to demonstrate how a real application
 * would initialize and manage a database connection.
 */

let isConnected = false;

export function connectDatabase() {
  if  (isConnected) {
    console.log("Database already connected");
    return;
  }
  

  console.log("Connecting to database...");
  isConnected = true;
  console.log("Database connection established");
}

export function getDatabaseStatus() {
  return isConnected;
}

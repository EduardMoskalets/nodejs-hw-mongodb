// # const DB_URI = "mongodb+srv://edikmoskalets:<db_password>@cluster0.5qu9w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// "mongodb+srv://edikmoskalets:<db_password>@contacts.zx9j6.mongodb.net/?retryWrites=true&w=majority&appName=Contacts"

// PORT=3000
// MONGODB_USER=edikmoskalets
// MONGODB_PASSWORD=hZjbTAGrjIdSm7PZ
// MONGODB_URL=contacts.zx9j6.mongodb.net
// MONGODB_DB=contacts

import dotenv from 'dotenv';
dotenv.config();

export function env(name, defaultValue) {
  const value = process.env[name];
  if (value) return value;
  if (defaultValue) return defaultValue;
  throw new Error(`Missing: process. env['${name}']`);
}
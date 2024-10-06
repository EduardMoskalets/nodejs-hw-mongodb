// # const DB_URI = "mongodb+srv://edikmoskalets:<db_password>@cluster0.5qu9w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

import dotenv from 'dotenv';
dotenv.config();

export function env(name, defaultValue) {
  const value = process.env[name];
  if (value) return value;
  if (defaultValue) return defaultValue;
  throw new Error(`Missing: process. env['${name}']`);
}
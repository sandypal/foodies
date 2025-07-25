import sql from 'better-sqlite3';
import { resolve } from 'styled-jsx/css';
const db = sql('meals.db');
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMealBySlug(slug) {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}   
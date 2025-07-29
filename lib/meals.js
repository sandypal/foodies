import  fs from 'node:fs'

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { resolve } from 'styled-jsx/css';
import { error } from 'node:console';
const db = sql('meals.db');
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
    return db.prepare('SELECT * FROM meals order by id DESC').all();
}

export async function getMealBySlug(slug) {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}   
export async function saveMeal(meal) {
    meal.slug = slugify(meal.title,{lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferImage  = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferImage),(error) => {
        if (error) {    
            throw new Error('Error writing image file: ' + error.message);
        };
    });
    stream.end();
    meal.image = `/images/${fileName}`;
    db.prepare(`INSERT INTO meals (title, slug, summary, image, instructions, creator, creator_email) VALUES (
        @title,
        @slug,
        @summary,
        @image,
        @instructions,
        @creator,
        @creator_email)`)
        .run(meal);

}
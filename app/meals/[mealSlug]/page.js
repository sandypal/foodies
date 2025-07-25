import { getMealBySlug, getMeals } from '@/lib/meals';
 import Image from 'next/image';
 
 import classes from './page.module.css';
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
  const meals = await getMeals();

  return meals.map((meal) => ({
    mealSlug: meal.slug,
  }));
}

export default async function MealsDetailsPage({ params }) {
  const meals = await getMealBySlug(params.mealSlug);
  if (!meals) {
   notFound();
  }
   // Convert line breaks to <br>
  if (typeof meals.instructions === 'string') {
    meals.instructions = meals.instructions.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
  return (
    <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meals.image} alt={meals.title} fill/>
      </div>
      <div className={classes.headerText}>
        <h1>{meals.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${'Email'}`}>{meals.creator}</a>
        </p>
         <p className={classes.summary}>
         {meals.summary}
        </p>
      </div>

    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meals.instructions }}></p>
       

    </main>
    </>
  );
}

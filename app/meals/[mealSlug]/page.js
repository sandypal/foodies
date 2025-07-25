import { getMealBySlug } from '@/lib/meals';
 import Image from 'next/image';
 
 import classes from './page.module.css';
import { notFound } from 'next/navigation';
export default async function MealsDetailsPage({ params }) {
  const meals = await getMealBySlug(params.mealSlug);
  if (!meals) {
   notFound();
  }
  meals.instructions = meals.instructions.replace(/(?:\r\n|\r|\n)/g, '<br>'); // Convert newlines to <br> for HTML rendering
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

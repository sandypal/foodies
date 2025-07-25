import { Suspense } from 'react';

import Link from 'next/link';
import classes from './page.module.css';
import MealGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals(){
   const meals = await getMeals();
   return <MealGrid meals={meals} />
}

export default async function MealPage() {
  const meals = await getMeals();
  return (
    <>
    <header className={classes.header}>
      <h1>Delicious meal, created{''}
      <span className={classes.highlight}>by you!</span>
      </h1>
      <p>Choose your favorite recipe and cook it yourself.  It is easy</p>
      <p className={classes.cta}>
        <Link href="/meals/share">
          Share Your Favorite Recipe with the World
        </Link>
        
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Feteching meals...</p>}>
            <Meals />
      </Suspense>
              
    </main>
    </>
   
  );
}

import Link from 'next/link';
export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>Meal Not Found</h1>
      <p>Sorry, we couldnt find the meal you were looking for.</p>
      <p>
        <Link href="/meals">Go back to meals list</Link>
      </p>
    </div>
  );
}
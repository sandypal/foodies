// app/meals/[slug]/page.js

export default function MealDetail({ params }) {
  return (
    <div>
      <h1>Meal Detail</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}

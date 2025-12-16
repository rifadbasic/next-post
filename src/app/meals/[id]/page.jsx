// import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// face data
const fetchMeal = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals[0];
  } catch (err) {
    console.log(err);
    return null;
  }
};

// metadata
export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const SingleMeal = await fetchMeal(id);

  return {
    title: SingleMeal.strMeal,
    description: SingleMeal.strInstructions,
  };
}

export default async function SingleMealPage({ params }) {
  const { id } = await params;
  // const [meal, setMeal] = useState(null);
  // console.log(meal);

  const meal = await fetchMeal(id);
  if (!meal) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ing = meal[`strIngredient${i + 1}`];
    const mea = meal[`strMeasure${i + 1}`];
    return ing && ing.trim() ? `${ing} - ${mea}` : null;
  }).filter(Boolean);

  return (
    <div className="min-h-screen bg-base-100 p-4 md:p-8">
      {/* back to meal button */}
      <div className="space-y-4 mb-10">
        <Link
          href="/meals"
          className="text-center px-4 py-2 rounded bg-blue-700 hover:bg-blue-600"
        >
          Back to meals
        </Link>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            width={641}
            height={641}
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{meal.strMeal}</h1>

          <div className="flex gap-3 text-sm opacity-80">
            <span className="badge badge-outline">{meal.strCategory}</span>
            <span className="badge badge-outline">{meal.strArea}</span>
          </div>

          <p className="leading-relaxed text-base-content/80">
            {meal.strInstructions}
          </p>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              className="btn btn-sm btn-error text-white"
            >
              ▶ Watch on YouTube
            </a>
          )}
        </div>
      </div>

      {/* Ingredients */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {ingredients.map((item, index) => (
            <li key={index} className="p-3 rounded-xl bg-base-200 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

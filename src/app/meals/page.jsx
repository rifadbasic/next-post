import Link from "next/link";
import MealInpute from "./components/MealInpute";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// metadata
export const metadata = {
  title: "Meals Page",
  description: "A simple Next.js app to learn the basics of Next.js framework.",
};

export default async function MealPage({ searchParams }) {
  const query = await searchParams;
  const mealData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      return data.meals;
      //   setMeals(data?.meals || []);
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const meals = await mealData();

  return (
    <div >
      <MealInpute />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {meals?.map((meal) => {
          return (
            <div key={meal.idMeal} className={`rounded-2xl border-2 border-amber-50 overflow-hidden shadow-lg p-4 bg-zinc-600 text-white ${roboto.className}`}>
              <div>{meal.strMeal}</div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image width={641} height={641} src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              {/* <div>{meal.strInstructions}</div> */}
              <div>{meal.strArea}</div>
              <div>{meal.strCategory}</div>
              <div className="text-white mt-4">
                <Link
                  className="p-2 mt-4 rounded bg-blue-600"
                  href={`/meals/${meal.idMeal}`}
                >
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

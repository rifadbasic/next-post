import Link from "next/link";
import MealInpute from "./components/MealInpute";

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
    <div>
      <MealInpute />
      <div className="grid grid-cols-4 gap-8">
        {meals?.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <div>{meal.strMeal}</div>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
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

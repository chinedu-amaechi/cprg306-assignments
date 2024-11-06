"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || []; // return an empty array if no meals are found
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMealIdeas() {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2 className='font-semibold text-2xl'>Meal Ideas</h2>
            {ingredient && (
                <p className='mb-4'>
                    Here are some meal ideas using {ingredient}:
                </p>
            )}
            <ul className='space-y-4'>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <h3 className='text-xl font-bold'>{meal.strMeal}</h3>
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className='w-full h-48 object-cover rounded'
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MealIdeas;
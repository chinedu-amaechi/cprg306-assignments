"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Meal Ideas</h2>
            {ingredient && (
                <p className='mb-4'>
                    Here are some meal ideas using {ingredient}:
                </p>
            )}
            <ul className='space-y-4'>
                {meals.map((meal) => (
                    <li
                        key={meal.idMeal}
                        className='bg-zinc-800 p-4 rounded-lg shadow flex items-center gap-4'
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className='w-20 h-20 rounded-lg object-cover'
                        />
                        <span className='font-medium'>{meal.strMeal}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MealIdeas;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';
import Navbar from '../components/Navbar';

const MealGenerator = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/1/random.php`);
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching random meal:', error);
      }
    };

    fetchRandomMeal();
  }, []);


  return (
    <>
    <Navbar/>
      <div className="text-center">
  <h1 className="text-[50px] font-bold">Random Meal Generator</h1>
</div>

{meal && (
        <div className="card mt-5 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:flex md:items-center md:justify-center">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full md:w-auto" />
            </div>
            <div className="md:flex md:items-center md:justify-start p-4">
              <div>
                <h5 className="text-[30px] font-bold mb-2">{meal.strMeal}</h5>
                <p className="text-gray-700">{meal.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MealGenerator;
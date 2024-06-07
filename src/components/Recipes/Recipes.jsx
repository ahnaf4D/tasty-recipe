import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import OurRecipe from './OurRecipe';
import WantToCook from '../WantToCook/WantToCook';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CurrentCook from '../CurrentCook/CurrentCook';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [cookTableRecipe, setCookTableRecipe] = useState([]);
  const [currentCooks, setCurrentCooks] = useState([]);
  useEffect(() => {
    fetch('/recipes.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const handleAddToCook = (recipe) => {
    const isRecipeAlreadyAdded = cookTableRecipe.some(
      (item) => item.recipe_id === recipe.recipe_id
    );
    if (isRecipeAlreadyAdded) {
      toast.warn('This recipe is already on your cooking table!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } else {
      const newCookingTableRecipe = [...cookTableRecipe, recipe];
      setCookTableRecipe(newCookingTableRecipe);
      toast.success('Recipe added to your cooking table!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };
  const handleAddToCurrentCook = (recipeToRemove) => {
    setCurrentCooks((prevCooks) => [...prevCooks, recipeToRemove]);
    const newRecipes = cookTableRecipe.filter(
      (recipe) => recipe.recipe_id !== recipeToRemove.recipe_id
    );
    setCookTableRecipe(newRecipes);
  };
  return (
    <div>
      <OurRecipe></OurRecipe>
      <div className='flex  flex-col  lg:flex-row justify-around '>
        <div className='grid  gap-4 grid-cols-1 lg:grid-cols-2'>
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              handleAddToCook={handleAddToCook}
              recipe={recipe}
            ></Recipe>
          ))}
        </div>
        <div>
          <div>
            <WantToCook
              handleAddToCurrentCook={handleAddToCurrentCook}
              cookTableRecipe={cookTableRecipe}
            ></WantToCook>
          </div>
          <div>
            <CurrentCook currentCooks={currentCooks}></CurrentCook>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </div>
  );
}

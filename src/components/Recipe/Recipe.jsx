import { GiCook } from 'react-icons/gi';
import { GiHealthCapsule } from 'react-icons/gi';
export default function Recipe({ recipe, handleAddToCook }) {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-2xl p-4'>
        <figure>
          <img src={recipe_image} className='w-60' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title font-bold text-3xl'>{recipe_name}</h2>
          <p className='text-xl'>{short_description}</p>
          <ul className='list-disc'>
            <span className='text-2xl font-bold'>
              {' '}
              Ingredients({ingredients.length})
            </span>
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <div className='flex items-center text-xl'>
            <p className='flex items-center'>
              <GiCook />
              {preparing_time} min
            </p>
            <p className='flex items-center'>
              <GiHealthCapsule />
              {calories}
            </p>
          </div>
          <div className='card-actions justify-end'>
            <button
              className='btn btn-primary'
              onClick={() => handleAddToCook(recipe)}
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

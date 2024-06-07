export default function WantToCook({
  cookTableRecipe,
  handleAddToCurrentCook,
}) {
  return (
    <div>
      <h1 className='text-2xl'>Want to Cook : {cookTableRecipe.length}</h1>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>name</th>
              <th>Preparation Time</th>
              <th>calories</th>
            </tr>
          </thead>
          <tbody>
            {cookTableRecipe.map((recipe) => (
              <tr key={recipe.recipe_id} className='bg-base-200 hover'>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} Calory</td>
                <td>
                  <button
                    className='btn btn-success'
                    onClick={() => handleAddToCurrentCook(recipe)}
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

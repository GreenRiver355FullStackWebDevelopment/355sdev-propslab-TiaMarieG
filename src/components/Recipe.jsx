// Importing the CSS
import './Recipe.css'

// Presentational Component
// Destructuring props to explicity call recipe, ingredients, and instructions
function Recipe({ recipe, ingredients, instructions }) {
  return (
    // Changed to a div and added a className for styling purposes
    <div className="recipe-card">
      <h2>{recipe}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {/* Adding a map to iterate over the ingredients object so that they can be placed on separate lines */}
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <ol>
        {/* Adding a map to iterate over the instructions object so that they can be placed on separate lines */}
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;

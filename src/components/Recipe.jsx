// Importing the CSS
import './Recipe.css'
import {Button, Typography, Card, CardHeader, CardContent } from '@mui/material';
// Help from Ix
import { useState } from 'react';

// Presentational Component
// Destructuring props to explicity call recipe, ingredients, and instructions
function Recipe({ recipe, ingredients, instructions }) {
  const [showRecipe, setShowRecipe] = useState(false);
  return (
    // Changed to a div and added a className for styling purposes
    <Card className="recipe-card" sx={{ maxWidth: 500 }}>
      <CardHeader title={recipe} />
      <CardContent>
        <Typography variant="h6" component="h2">Ingredients:</Typography>
        <ul>
          {/* Adding a map to iterate over the ingredients object so that they can be placed on separate lines */}
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        <Button onClick={()=>setShowRecipe(!showRecipe)}> Show Instructions</Button>
        {showRecipe && (
          <div>

            <Typography variant="h6" component="h2">Instructions:</Typography>
            <ol>
              {/* Adding a map to iterate over the instructions object so that they can be placed on separate lines */}
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </CardContent>

    </Card>
  );
}

export default Recipe;

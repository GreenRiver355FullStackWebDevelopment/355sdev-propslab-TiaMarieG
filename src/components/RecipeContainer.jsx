// Importing child/presentational component to Higher-Order Component
import { Grid } from "@mui/material";
import Recipe from "./Recipe.jsx"

//Higher-Order Component - Passing in information from App to be used as props by Recipe
function RecipeContainer({ recipes }) {
    return(
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
            {/* Using a map to loop through the recipes and rendering a Recipe component for each */}
            {/* Created a key since an id was not provided with the dataset */}
            {recipes.map(( recipe, index ) => (
                <Recipe key={`${index}${recipe.name}`} 
                recipe={recipe.name}
                ingredients={recipe.ingredients} 
                instructions={recipe.instructions}
                />
                ))
            }
        </Grid>
    );
}

export default RecipeContainer;
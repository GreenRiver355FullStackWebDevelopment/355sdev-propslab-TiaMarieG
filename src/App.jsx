import './App.css'
// Importing data provided by data.js
import { recipes } from "./data/data.js"
// Importing child RecipeContainer to App.jsx
import RecipeContainer from "./components/RecipeContainer.jsx"

function App() {
  return (
    <>
      {/* Rendering RecipeContainer inside jsx and incorporating imported recipe data to be passed down to RecipeContainer*/}
      <RecipeContainer recipes={recipes} />
    </>
  );
}

export default App

import { faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RecipeCard = ({ recipe, addToFavorites }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <div style={{margin:"0px 20px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <div>
          <h3>{recipe.label}</h3>
          <p>{recipe.cuisineType.join(', ')} | {recipe.dishType}</p>
          <p><FontAwesomeIcon icon={faUtensils} style={{ color: "#c8cfff" }}/> {recipe.calories} kcal</p>
        </div>
        <div style={{display:"flex"}}>
          <a href={recipe.url} target="_blank" rel="noopener noreferrer" style={{padding:"10px", textDecoration:"none", backgroundColor:"#d7096c", borderRadius:"20px", color:"white"}}>View Recipe</a>
          <button onClick={addToFavorites} style={{marginLeft:"5px", backgroundColor:"transparent", cursor:"pointer", border:"none"}}>
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffbf00", height:"30px" }}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

import React from 'react';
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients})=>{
    return (
        <div className={style.recipe}>
            <br/><br/>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient=>(
                     <li>{ingredient.text}</li>
                ))}
               
            </ol>
            <br/><br/>
            <img className={style.images} src={image} alt={title}/>
            <br/>
            <br/>
        </div>
        
    );
}
export default Recipe;
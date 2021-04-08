import React,{useEffect, useState} from "react";
import "./App.css";
import Recipe from './Recipe';

const App = ()=>{

  const APP_ID = "dd896c94";
  const APP_KEY = "e8d527bd4a4560d2a0fe199136c496c3"
  const [recipes , setRecipes] = useState([]); 
  const [search , setSearch] = useState('');
  const [query , setQuery] = useState('')
  useEffect(()=>{
    getRecipies();
    console.log('Effect is running ')
  },[query]);
  const getRecipies = async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =await response.json();
    setRecipes(data.hits) 
    // console.log(data.hits)
    };

    const updateSearch = e =>{
      setSearch(e.target.value);//wil take input
    }

    const getSearch= e =>{
      e.preventDefault();
      setQuery(search)
      setSearch('');
    }
    return(
      <div className="App">
      <h1>Weclome</h1>
      <form onSubmit={getSearch} className="seach-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit" >Search</button>
      </form>
      <div className="recipies">
        {recipes.map(recipe=>(
          <Recipe
          key = {recipe.recipe.label} 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}



export default App;
// const Example = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
// const [counter , setCounter] = useState(0);
// useEffect(()=>{
  //   console.log('Effect is running ')
  // })  // this will runn everytime yoou rerender your page or referesh your page
  
  // {/* <h1  onClick={()=>setCounter(counter+1) }>{counter}</h1> */}
  //[counter] it will only useeffect when counter changes
  // ,[] by adding this it will only use effect run 1st time the page was rendered .
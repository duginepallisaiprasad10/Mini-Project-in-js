const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city) {
    const api_key = "94f2993d0b286564a215f115dde4e9b8";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${api_url}`)
        .then(response => response.json());


    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./images/clear.png";
            break;
        case 'Mist':
            weather_img.src = "./images/mist.png";
            break;
        case 'Rain':
            weather_img.src = "./images/rain.png";
            break;
        case 'Snow':
            weather_img.src = "./images/snow.png"; 4
            break;
    }
}


searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

// 

const searchBox=document.querySelector('.searchBox');
const searchBtn=document.querySelector('.searchBtn');
const recipeContainer=document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');


//function to get recipes
const fecthRecipes = async (query) =>{
           recipeContainer.innerHTML="<h2>Fetching recipes...<h2>";
           try{
           const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
           const response = await data.json();

           recipeContainer.innerHTML="";

           response.meals.forEach(meal => {
            const recipeDiv=document.createElement('div');
            recipeDiv.classList.add("recipe");
            recipeDiv.innerHTML= `
                   <img src="${meal.strMealThumb}">
                   <h3>${meal.strMeal}</h3>
                   <p><span>${meal.strArea}<span> Dish</p>
                   <p>Belongs to <span>${meal.strCategory}<span> Cateogry</p>
            `
            const button=document.createElement('button');
            button.textContent="View Recipe"
            recipeDiv.appendChild(button);

            // adding addEventListener to recipe button

            button.addEventListener('click', () => {
                openRecipePopup(meal);
            });

            recipeContainer.appendChild(recipeDiv);
           });
        }
        catch(error){
            recipeContainer.innerHTML=`<h2>Error in fetching recipes</h2>`
        }
}
//function to fetch ingrediants and measurements
const fetchIngredients = (meal) =>{
    let ingredientsList ="";
    for(let i=1; i<20; i++){
        const ingredient = meal[`strIngredient${i}`];
        if(ingredient){
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`
        }
        else{
            break;
        }
    }
    return ingredientsList;

}
const openRecipePopup = (meal) =>{
    recipeDetailsContent.innerHTML=`
              <h2 class="recipeName">${meal.strMeal}</h2>
              <h3>Ingrediants:</h3>
              <ul class="ingredientList">${fetchIngredients(meal)}</ul>
              <div class="recipeInstructions">
                 <h3>Instructions:</h3>
                 <p>${meal.strInstructions}</p>
              </div>   
    `
    recipeDetailsContent.parentElement.style.display="block";

}

recipeCloseBtn.addEventListener("click",()=>{
              recipeDetailsContent.parentElement.style.display= "none";
});

searchBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if(!searchInput){
        recipeContainer.innerHTML=`<h2>TYpe the meal in the search box?</h2>`
    }
    fecthRecipes(searchInput);
});
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`) //Reference: https://www.themealdb.com/api.php
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}
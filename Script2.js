// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
// }
// const url = 'https://drinking1.p.rapidapi.com/questions/random?type=dirty';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '127f26132amsh66bdc73d8656696p113da5jsnd9fe9f3d55ce',
// 		'x-rapidapi-host': 'drinking1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const url = 'https://broadway-wine.p.rapidapi.com/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '127f26132amsh66bdc73d8656696p113da5jsnd9fe9f3d55ce',
// 		'x-rapidapi-host': 'broadway-wine.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
async function getLatestBlockHashTransactions(lastBlockHash) {
    let txHashes;
    try {
        let response = await axios.get(`'https://broadway-wine.p.rapidapi.com/'`);
        let transactions = response.data.tx;
        txHashes = transactions.map((tx) => {
            return tx.hash;
        });
    } catch {
        txHashes = ['Failed to get transactions . . .'];
    };
    return txHashes;
}
}
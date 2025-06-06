const url = 'https://foodprint.p.rapidapi.com/api/foodprint/getCategories';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '127f26132amsh66bdc73d8656696p113da5jsnd9fe9f3d55ce',
		'x-rapidapi-host': 'foodprint.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


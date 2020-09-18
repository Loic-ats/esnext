let favoriteCityId = 'Rome';
console.log(favoriteCityId);

favoriteCityId ='Paris';
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

/*citiesId = [];
console.log(citiesId);
Commentaire dans la console = TypeError: Assignment to constant variable.
*/

citiesId.push("Tokyo");
console.log(citiesId);

function getWeather(cityId = 'Paris') {
    let city = cityId;
    let temperature = 20;

    return '{nom : ' + city + ' ' + 'temperature : ' + temperature + '}'; 
}

const weather = getWeather(favoriteCityId);
console.log(weather);
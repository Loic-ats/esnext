let favoriteCityId = 'Rome';
console.log(favoriteCityId);

favoriteCityId = 'Paris';
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

/*citiesId = [];
console.log(citiesId);
Commentaire dans la console = TypeError: Assignment to constant variable.
*/

citiesId.push("Tokyo");
console.log(citiesId);

//Création d’objet

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);

//Affectation destructurée

const { city, temperature } = weather;

console.log(city);
console.log(temperature);

//Rest operator

let [parisId, nycID, ...otherCitiesID] = citiesId;

console.log(parisId);
console.log(nycID);
console.log(otherCitiesID.length);

//Classe

class Trip {

    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;

    }

    toString() {
        return 'Trip ' + '[ ' + this.id + ' , ' + this.name + ' , ' + this.imageUrl + ',' + this.price + ' ]';
    }

    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip(Trip){

        Trip.id = 'rio-de-janeiro';
        Trip.name = 'Rio de Janeiro';
        Trip.imageUrl = 'img/rio-de-janeiro.jpg';
        return Trip;
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');


console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.price);
console.log(parisTrip.toString());

let parisTrip2 = new Trip('paris', 'Paris', 'img/paris.jpg');
const defaultTrip = Trip.getDefaultTrip(parisTrip2);
console.log(defaultTrip.toString());

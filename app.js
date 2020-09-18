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
        return 'Trip ' + '[ ' + this.id + ' , ' + this.name + ' , ' + this.imageUrl + ' , ' + this.price + ' ]';
    }

    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip(Trip) {

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

//Héritage

class FreeTrip extends Trip {

    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString() {
        return 'Free' + super.toString();
    }
}

let freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')
console.log(freeTrip.toString());

//Promise, Set, Map, Arrow Function

class TripService {

    constructor() {

        this.trips = new set();

        const trip1 = new Trip('paris', 'Paris', 'img/paris.jpg')
        const trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        const trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

        this.trips.add(trip1);
        this.trips.add(trip2);
        this.trips.add(trip3);

    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve(console.log(tripName));
                reject(console.log("No trip with name xxx"));

            }, 2000)
        });
    }
}

class PriceService {
    constructor() {
        const myMap = new Map();

        myMap.set('paris', 100);
        myMap.set('rio-de-janeiro', 800);
        myMap.set('nantes', '');

    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                
            }, 2000)
        });
    }
}


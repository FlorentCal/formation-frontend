console.log('let :')
let favoriteCityId = 'rome'
console.log('   ' , favoriteCityId)

favoriteCityId = 'paris'
console.log('   ' , favoriteCityId)

console.log('const :')
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro']
//citiesId = [] : returns an error : 'TypeError: Assignment to constant variable.'
console.log('   ' , citiesId)

citiesId.push('tokyo')
console.log('   ' , citiesId)

console.log('Création d\'objet :')
getWeather = function(cityId){
    let city = cityId.toUpperCase()
    let temperature = 20
    return {city, temperature}
}

const weather = getWeather(favoriteCityId)
console.log('   Object', weather)

console.log('Affectation destructurée :')
const {city, temperature} = weather
console.log('   ' , city)
console.log('   ' , temperature)

console.log('Rest operator :')
const[parisId, nycId, ...otherCitiesId] = citiesId
console.log('   ' , parisId)
console.log('   ' , nycId)
console.log('   ' , otherCitiesId.length)

console.log('Classe :')
class Trip{
    constructor(id, name, imageUrl){
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }

    get price(){
        return this._price
    }

    set price(newPrice){
        this._price = newPrice
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')

console.log('   ', parisTrip)
console.log('   ' , parisTrip.name)

Trip.prototype.toString = function(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}]`
}
console.log('   ', parisTrip.toString())

Trip.prototype.toString = function(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`
}

parisTrip.price = 100
console.log('   ', parisTrip.toString())

Trip.getDefaultTrip = function(){
    return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
}
const defaultTrip = Trip.getDefaultTrip()
console.log('   ', defaultTrip.toString())

console.log('Héritage')
class FreeTrip extends Trip{
    constructor(id, name, imageUrl){
        super(id, name, imageUrl)
        this.price = 0
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')
console.log('   ', freeTrip.toString())

FreeTrip.prototype.toString = function(){
    return 'Free' + Trip.prototype.toString.call(this)
}
console.log('   ', freeTrip.toString())

console.log('Promise, Set, Map, Arrow Function : ')
class TripService {
    constructor() {
        this.tripSet = new Set([
            new Trip('paris', 'Paris', 'img/paris.jpg'),
            new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
            new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        ])
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let tripFound
                this.tripSet.forEach(trip => {
                    if(trip.name == tripName){
                        tripFound = trip
                    }
                })
                if (tripFound) {
                    resolve(tripFound)   
                } else {
                    reject(`No trip with name ${tripName}`)
                }
            }
            , 2000)
            
        })
    }
}

class PriceService {
    constructor() {
        this.priceMap = new Map([
            ['paris', 100],
            ['rio-de-janeiro', 800]
        ])
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let price = this.priceMap.get(tripId)
                if (price) {
                    resolve(price)
                } else {
                    reject(`No price found for trip id ${tripId}`)
                }
            }
            , 2000)
            
        })
    }
}

let tripService = new TripService()
let priceService = new PriceService()

tripService.findByName('Paris')
            .then(trip => console.log('Trip found :', trip))
            .catch(exception => console.log(exception))

tripService.findByName('Toulouse')
            .then(trip => console.log('Trip found :', trip))
            .catch(exception => console.log(exception))


tripService.findByName('Rio de Janeiro')
            .then(trip => priceService.findPriceByTripId(trip.id))
            .then(price => console.log('Price found :', price))
            .catch(exception => console.log(exception))

tripService.findByName('Nantes')
            .then(trip => priceService.findPriceByTripId(trip.id))
            .then(price => console.log('Price found :', price))
            .catch(exception => console.log(exception))
import Car from "../../models/Car.js";

// @ts-ignore
let _carApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/cars',
  timeout: 3000
})

let _subscribers = {
  cars: []
}

let _state = {
  cars: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class CarService {
  constructor() {
    console.log("Car Service works")
  }

  purchase(carId) {
    _carApi.delete(carId)
      .then(() => {
        let cars = this.Cars
        let index = cars.findIndex(c => c._id == carId)
        cars.splice(index, 1)
        setState('cars', cars)
      })
      .catch(e => console.error(e))
  }

  placeBid(carId) {
    // we need to get the complete car object from the state.cars with _id == carId
    let carToUpdate = this.Cars.find(c => c._id == carId)
    if (!carToUpdate) return alert('Car not found dude.') // this is null check
    // modify the price of the found car
    carToUpdate.price *= 1.1
    // http PUT request
    _carApi.put(carId, carToUpdate)
      .then(res => {
        // 1. envoke getCars || we'll not do this
        // this.getCars()
        // 2. add the car to the cars array in our state || we'll do this
        let cars = this.Cars
        let index = cars.findIndex(c => c._id == carId)
        // cars.splice(index, 1, carToUpdate) | this replaces the old object with a completely new one
        cars[index].price = carToUpdate.price // this just updates the property on the existing object
        setState('cars', cars)
      })
      .catch(e => console.error(e))
  }

  getCars() {
    _carApi.get('')
      .then(res => {
        let serverCars = res.data.data
        let cars = serverCars.map(c => new Car(c)).reverse()
        setState('cars', cars)
      })
      .catch(e => console.error(e))
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Cars() {
    return _state.cars.map(car => new Car(car))
  }

  addCar(newCar) {
    _carApi.post('', newCar)
      .then(res => {
        // 1. envoke getCars || we'll not do this
        // 2. add the car to the cars array in our state || we'll do this
        let serverCar = res.data.data
        let car = new Car(serverCar)
        let cars = this.Cars
        cars.unshift(car)
        setState('cars', cars)
      })
      .catch(e => console.error(e))
  }
}

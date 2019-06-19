import Car from "../../models/Car.js";


let _cars = [
  new Car({ make: "Buick", model: "Century", year: 1989, color: "Red" }),
  new Car({ make: "Lamborghini", model: "Diablo", year: 2006, color: "Black" })
]

export default class CarService {
  constructor() {
    console.log("Car Service works")
  }

  get Cars() {
    return _cars.map(car => new Car(car))
  }

  addCar(newCar) {
    _cars.push(new Car(newCar))
  }
}

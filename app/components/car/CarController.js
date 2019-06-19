import CarService from "./CarService.js";

let _carService = new CarService()

function drawCars() {
  let carsElem = document.querySelector("#cars")
  let template = ''
  let cars = _carService.Cars
  cars.forEach(car => { template += car.Template })
  carsElem.innerHTML = template
}

export default class CarController {
  constructor() {
    console.log("Car Controller works")
    drawCars()
  }

  addCar(e) {
    e.preventDefault()
    let form = e.target

    let newCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      color: form.color.value
    }

    _carService.addCar(newCar)
    form.reset()
    drawCars()
  }

}
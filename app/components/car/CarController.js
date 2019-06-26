import CarService from "./CarService.js";

let _carService = new CarService()

function drawCars() {
  let carsElem = document.querySelector("#cars")
  let template = ''
  let cars = _carService.Cars
  cars.forEach(car => {
    template += car.Template
  })
  carsElem.innerHTML = template
}

export default class CarController {
  constructor() {
    console.log("Car Controller works")
    _carService.addSubscriber("cars", drawCars)
    _carService.getCars()
  }

  addCar(e) {
    e.preventDefault()
    let form = e.target

    let newCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }

    _carService.addCar(newCar)
    form.reset()
    drawCars()
  }

  placeBid(carId) {
    _carService.placeBid(carId)
  }

  purchase(carId) {
    _carService.purchase(carId)
  }
}
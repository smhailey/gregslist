import CarController from "./components/car/CarController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController()

    }
  }
}

window["app"] = new App()
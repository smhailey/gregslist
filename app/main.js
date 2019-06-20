import CarController from "./components/car/CarController.js";
import HouseController from "./components/house/HouseController.js";
import JobController from "./components/job/JobController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController()
    }
  }
}

window["app"] = new App()
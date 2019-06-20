import CarController from "./components/car/CarController.js";
import HouseController from "./components/house/HouseController.js";
import JobController from "./components/job/JobController.js";
import MusicEquipController from "./components/musicEquip/MusicEquipController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController(),
      musicEquipController: new MusicEquipController()
    }
  }
}

window["app"] = new App()
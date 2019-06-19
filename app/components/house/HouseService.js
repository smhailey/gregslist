import House from "../../models/House.js";

let _houses = [
  new House({ make: "Corey Barton", model: "Updated", year: "2011", color: "Blue" })
]

export default class HouseService {
  constructor() {
    console.log("House Service works")
  }

  get Houses() {
    return _houses.map(house => new House(house))
  }

  addHouse(newHouse) {
    _houses.push(new House(newHouse))
  }
}
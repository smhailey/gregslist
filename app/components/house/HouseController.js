import HouseService from "./HouseService.js";


let _houseService = new HouseService()

function drawHouses() {
  let housesElem = document.querySelector("#houses")
  let template = ''
  let houses = _houseService.Houses
  houses.forEach(house => {
    template += house.Template
  })
  housesElem.innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("House Controller works")
    drawHouses()
  }

  addHouse(e) {
    e.preventDefault()
    let form = e.target

    let newHouse = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      color: form.color.value
    }

    _houseService.addHouse(newHouse)
    form.reset()
    drawHouses()
  }
}
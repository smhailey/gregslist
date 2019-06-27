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
    _houseService.addSubscriber("houses", drawHouses)
    _houseService.getHouses()
  }

  addHouse(e) {
    e.preventDefault()
    let form = e.target

    let newHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value
    }

    _houseService.addHouse(newHouse)
    form.reset()
    drawHouses()
  }

  placeBid(houseId) {
    _houseService.placeBid(houseId)
  }

  purchase(houseId) {
    _houseService.purchase(houseId)
  }
}
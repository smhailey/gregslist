import House from "../../models/House.js";

// @ts-ignore
let _houseApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/houses',
  timeout: 3000
})

let _subscribers = {
  houses: []
}

let _state = {
  houses: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class HouseService {
  constructor() {
    console.log("House Service works")
  }

  purchase(houseId) {
    debugger
    _houseApi.delete(houseId)
      .then(() => {
        let houses = this.Houses
        let index = houses.findIndex(h => h._id == houseId)
        this.Houses.splice(index, 1)
        setState('houses', houses)
        console.log(houseId)
      })
      .catch(e => console.error(e))
  }

  placeBid(houseId) {
    let houseToUpdate = this.Houses.find(c => c._id == houseId)
    if (!houseToUpdate) return alert('House not found dude.')
    houseToUpdate.price *= 1.1
    _houseApi.put(houseId, houseToUpdate)
      .then(res => {
        let houses = this.Houses
        let index = houses.findIndex(c => c._id == houseId)
        houses[index].price = houseToUpdate.price
        setState('houses', houses)
      })
      .catch(e => console.error(e))
  }

  getHouses() {
    _houseApi.get('')
      .then(res => {
        let serverHouses = res.data.data
        let houses = serverHouses.map(h => new House(h))
          .reverse()
        setState('houses', houses)
      })
      .catch(e => console.error(e))
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Houses() {
    return _state.houses.map(house => new House(house))
  }

  addHouse(newHouse) {
    _houseApi.post('', newHouse)
      .then(res => {
        let serverHouse = res.data.data
        let house = new House(serverHouse)
        let houses = this.Houses
        houses.unshift(house)
        setState('houses', houses)
      })
      .catch(e => console.error(e))
  }
}
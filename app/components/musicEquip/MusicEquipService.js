import MusicEquip from "../../models/MusicEquip.js";

let _state = {
  musicEquips: []
}

_state.musicEquips.push(new MusicEquip({
  instrumentName: "Piano",
  maker: "Yamaha",
  year: "2011",
  price: 1500
}))
_state.musicEquips.push(new MusicEquip({
  instrumentName: "Violin",
  maker: "Stradivarius",
  year: "1719",
  price: 16000000
}))

let _subscribers = {
  musicEquips: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class MusicEquipService {
  constructor() {
    console.log("Music Equipment service works")
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get MusicEquips() {
    return _state.musicEquips.map(musicEquip => new MusicEquip(musicEquip))
  }

  addMusicEquip(newMusicEquip) {
    let temp = this.MusicEquips
    temp.push(new MusicEquip(newMusicEquip))
    setState("musicEquips", temp)
  }
}
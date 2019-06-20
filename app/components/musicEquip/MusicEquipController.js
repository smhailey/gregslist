import MusicEquipService from "./MusicEquipService.js";

let _musicEquipService = new MusicEquipService()

function drawMusicEquips() {
  let musicEquipsElem = document.querySelector('#musicEquips')
  let template = ''
  let musicEquips = _musicEquipService.MusicEquips
  musicEquips.forEach(musicEquip => {
    template += musicEquip.Template
  })
  musicEquipsElem.innerHTML = template
}

export default class MusicEquipController {
  constructor() {
    console.log("Music Equipment controller works")
    _musicEquipService.addSubscriber("musicEquips", drawMusicEquips)
    drawMusicEquips()
  }

  addMusicEquip(e) {
    e.preventDefault()
    let form = e.target

    let newMusicEquip = {
      instrumentName: form.instrumentName.value,
      maker: form.maker.value,
      year: form.year.value,
      price: form.price.value
    }

    _musicEquipService.addMusicEquip(newMusicEquip)
    form.reset()
  }
}
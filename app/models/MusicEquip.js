export default class MusicEquip {
  constructor(data) {
    this.instrumentName = data.instrumentName || ''
    this.maker = data.maker || ''
    this.year = data.year || ''
    this.price = data.price || ''
  }

  get Template() {
    return `
    <div class="col-4">
        <h5>Instrument name: ${this.instrumentName}</h5>
        <h5>Maker: ${this.maker}</h5>
        <h5>Year: ${this.year}</h5>
        <h6>Price: ${this.price}</h6>
      </div>
    `
  }
}
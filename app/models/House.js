export default class House {
  constructor(data) {
    this.make = data.make || ''
    this.model = data.model || ''
    this.year = data.year || ''
    this.color = data.color || ''
  }

  get Template() {
    return `
    <div class="col-4">
        <h5>Make: ${this.make}</h5>
        <h5>Model: ${this.model}</h5>
        <h5>Year: ${this.year}</h5>
        <h6>Color: ${this.color}</h6>
      </div>
    `
  }
}
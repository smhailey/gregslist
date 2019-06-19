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
        <h4>Make: ${this.make}</h4>
        <h4>Model: ${this.model}</h4>
        <h4>Year: ${this.year}</h4>
        <p>Color: ${this.color}</p>
      </div>
    `
  }
}
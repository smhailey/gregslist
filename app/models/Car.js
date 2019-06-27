export default class Car {
  constructor(data) {
    this._id = data._id || ''
    this.make = data.make || ''
    this.model = data.model || ''
    this.year = data.year || NaN
    this.imgUrl = data.imgUrl || ''
    this.price = data.price || NaN
    this.description = data.description || ''
  }

  get Template() {
    return `
    <div class="col-4">
      <div class="card text-white bg-dark m-1">
        <img src="${this.imgUrl}" alt="Car photo" class="car-img-top" style="width:100%">
        <div class="card-body">
          <h4>Make: ${this.make}</h4>
          <h4>Model: ${this.model}</h4>
          <h4>Year: ${this.year}</h4>
          <p>Price: ${this.price.toFixed(0)}</p>
          <p contenteditable="true">${this.description}</p>
        </div>
        <div class="card-footer">
          <button onclick="app.controllers.carController.placeBid('${this._id}')" class="btn btn-primary rounded-pill" style="width:100%">Place Bid</button>
          <button onclick="app.controllers.carController.purchase('${this._id}')" class="btn btn-danger rounded-pill" style="width:100%">Buy Car</button>
        </div>
      </div>
    </div>
    `
  }
}
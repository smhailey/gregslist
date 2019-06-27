export default class House {
  constructor(data) {
    this._id = data._id || ''
    this.bedrooms = data.bedrooms || ''
    this.bathrooms = data.bathrooms || ''
    this.levels = data.levels || ''
    this.imgUrl = data.imgUrl || ''
    this.year = data.year || NaN
    this.price = data.price || NaN
    this.description = data.description || ''
  }

  get Template() {
    return `
    <div class="col-4">
      <div class="card text-white bg-info m-1">
        <img src="${this.imgUrl}" alt="House photo" class="house-img-top" style="width:100%">
        <div class="card-body">
          <h4>Bedrooms: ${this.bedrooms}</h4>
          <h4>Bathrooms: ${this.bathrooms}</h4>
          <h4>Levels: ${this.levels}</h4>
          <p>Year: ${this.year}</p>
          <p>Price: ${this.price.toFixed(0)}</p>
          <p contenteditable="true">${this.description}</p>
        </div>
        <div class="card-footer">
          <button onclick="app.controllers.houseController.placeBid('${this._id}')" class="btn btn-primary rounded-pill" style="width:100%">Place Bid</button>
          <button onclick="app.controllers.houseController.purchase('${this._id}')" class="btn btn-danger rounded-pill" style="width:100%">Buy House</button>
        </div>
      </div>
    </div>
    `
  }
}
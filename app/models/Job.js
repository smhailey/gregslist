export default class Job {
  constructor(data) {
    this._id = data._id || ''
    this.company = data.company || ''
    this.jobTitle = data.jobTitle || ''
    this.hours = data.hours || NaN
    this.rate = data.rate || NaN
    this.description = data.description || ''
  }

  get Template() {
    return `
    <div class="col-4">
      <div class="card text-white bg-dark m-1">
        <img src="${this.imgUrl}" alt="Job photo" class="job-img-top" style="width:100%">
        <div class="card-body">
          <h4>Company: ${this.company}</h4>
          <h4>Job Title: ${this.jobTitle}</h4>
          <h4>Hours: ${this.hours.toFixed(0)}</h4>
          <p>Rate: ${this.rate.toFixed(0)}</p>
          <p contenteditable="true">${this.description}</p>
        </div>
        <div class="card-footer">
          <button onclick="app.controllers.jobController.apply('${this._id}')" class="btn btn-primary rounded-pill" style="width:100%">Apply</button>
          <button onclick="app.controllers.jobController.takeJob('${this._id}')" class="btn btn-danger rounded-pill" style="width:100%">Take Job</button>
        </div>
      </div>
    </div>
    `
  }
}

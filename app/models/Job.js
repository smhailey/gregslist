export default class Job {
  constructor(data) {
    this.jobTitle = data.jobTitle || ''
    this.description = data.description || ''
    this.pay = data.pay || ''
    this.location = data.location || ''
  }

  get Template() {
    return `
    <div class="col-4">
        <h5>Job Title: ${this.jobTitle}</h5>
        <h5>Description: ${this.description}</h5>
        <h5>Pay: ${this.pay}</h5>
        <h6>Location: ${this.location}</h6>
      </div>
    `
  }
}
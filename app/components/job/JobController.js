import JobService from "./JobService.js";

let _jobService = new JobService()

function drawJobs() {
  let jobsElem = document.querySelector("#jobs")
  let template = ''
  let jobs = _jobService.Jobs
  jobs.forEach(job => {
    template += job.Template
  })
  jobsElem.innerHTML = template
}

export default class JobController {
  constructor() {
    console.log("Job Controller works")
    _jobService.addSubscriber("jobs", drawJobs)
    _jobService.getJobs()
  }

  addJob(e) {
    e.preventDefault()
    let form = e.target

    let newJob = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }

    _jobService.addJob(newJob)
    form.reset()
    drawJobs()
  }

  apply(jobId) {
    _jobService.apply(jobId)
  }

  takeJob(jobId) {
    _jobService.takeJob(jobId)
  }
}
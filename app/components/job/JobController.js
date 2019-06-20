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
    drawJobs()
  }

  addJob(e) {
    e.preventDefault()
    let form = e.target

    let newJob = {
      jobTitle: form.jobTitle.value,
      description: form.description.value,
      pay: form.pay.value,
      location: form.location.value
    }

    _jobService.addJob(newJob)
    form.reset()
  }
}
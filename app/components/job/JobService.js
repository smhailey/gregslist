import Job from "../../models/Job.js";

// @ts-ignore
let _jobApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 3000
})

let _subscribers = {
  jobs: []
}

let _state = {
  jobs: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class JobService {
  constructor() {
    console.log("Job Service works")
  }

  takeJob(jobId) {
    _jobApi.delete(jobId)
      .then(() => {
        let jobs = this.Jobs
        let index = jobs.findIndex(j => j._id == jobId)
        jobs.splice(index, 1)
        setState('jobs', jobs)
      })
      .catch(e => console.error(e))
  }

  apply(jobId) {
    let jobToUpdate = this.Jobs.find(j => j._id == jobId)
    if (!jobToUpdate) return alert('Job not found dude.')
    jobToUpdate.rate *= 0.9
    _jobApi.put(jobId, jobToUpdate)
      .then(res => {
        let jobs = this.Jobs
        let index = jobs.findIndex(j => j._id == jobId)
        jobs[index].rate = jobToUpdate.rate
        setState('jobs', jobs)
      })
      .catch(e => console.error(e))
  }

  getJobs() {
    _jobApi.get('')
      .then(res => {
        let serverJobs = res.data.data
        console.log(res.data.data)
        let jobs = serverJobs.map(j => new Job(j)).reverse()
        setState('jobs', jobs)
      })
      .catch(e => console.error(e))
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }

  addJob(newJob) {
    _jobApi.post('', newJob)
      .then(res => {
        let serverJob = res.data.data
        let job = new Job(serverJob)
        let jobs = this.Jobs
        jobs.unshift(job)
        setState('jobs', jobs)
      })
      .catch(e => console.error(e))
  }
}
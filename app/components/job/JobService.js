import Job from "../../models/Job.js";

let _state = {
  jobs: []
}

_state.jobs.push(new Job({
  jobTitle: "Code Monkey",
  description: "Write code.",
  pay: "$27.00",
  location: "Boise, ID"
}))

let _subscribers = {
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

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }

  addJob(newJob) {
    let temp = this.Jobs
    temp.push(new Job(newJob))
    setState("jobs", temp)
  }
}
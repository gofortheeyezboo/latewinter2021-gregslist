import { ProxyState } from "../AppState.js";
import Jobs from "../Models/Jobs.js";

class JobsService{

 
  constructor(){
  }

  createJob(rawJob) {
   let newJob = new Jobs(rawJob)
   ProxyState.jobs = [...ProxyState.jobs, newJob]


  }

  apply(id) {
    let temp = ProxyState.jobs
    let job = temp.find(j=> j.id === id)
    alert('You have applied to this job')
    ProxyState.jobs = temp
  }

  deleteJob(id) {
    let temp = ProxyState.jobs
    let jobIndex = temp.findIndex(j =>  j.id == id)
    temp.splice(jobIndex, 1)
    ProxyState.jobs = temp
  }

  unHide(){
    let housesElem = document.getElementById('houses-hide')
    if(housesElem.hidden == false){
    document.getElementById('houses-hide').toggleAttribute('hidden') 
    }
    let carsElem = document.getElementById('cars-hide')
    if(carsElem.hidden == false){
    document.getElementById('cars-hide').toggleAttribute('hidden')

    }
    document.getElementById('jobs-hide').toggleAttribute('hidden')
    
  }
}

export const jobsService = new JobsService()
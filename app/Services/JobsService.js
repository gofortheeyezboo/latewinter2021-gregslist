import { ProxyState } from "../AppState.js";
import Jobs from "../Models/Jobs.js"
import { api } from "./AxiosService.js";

class JobsService{

 
  constructor(){
    this.getJobs()
  }
  async getJobs() {
    try {
      const res = await api.get('jobs')
      console.log(res);
      ProxyState.jobs = res.data.map(rawJob => new Jobs(rawJob))
    } catch (error) {
      console.error(error)
    }
  }

  async createJob(rawJob) {
    try {
      const res = await api.post('jobs', rawJob)
      ProxyState.jobs = [ ...ProxyState.jobs, new Jobs(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  apply(id) {
    let temp = ProxyState.jobs
    let job = temp.find(j=> j.id === id)
    alert('You have applied to this job')
    ProxyState.jobs = temp
  }

  async deleteJob(id) {
    try {
      const res = await api.delete(`jobs/${id}`)
      this.getJobs()
    } catch (error) {
      console.error(error)
    }
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
    let jobsElem = document.getElementById('jobs-hide')
    if(jobsElem.hidden == true ){
    document.getElementById('jobs-hide').toggleAttribute('hidden')
    }
  }
  showAll(){
    let housesElem = document.getElementById('houses-hide')
    if(housesElem.hidden == true){
    document.getElementById('houses-hide').toggleAttribute('hidden') 
    }
    let carsElem = document.getElementById('cars-hide')
    if(carsElem.hidden == true){
    document.getElementById('cars-hide').toggleAttribute('hidden')
    }
    let jobsElem = document.getElementById('jobs-hide')
    if(jobsElem.hidden == true){
    document.getElementById('jobs-hide').toggleAttribute('hidden')
    }   
  }
}

export const jobsService = new JobsService()
import {generateId} from "../Utils/GenerateId.js"

export default class Job{
constructor({company, jobTitle, hours, rate, description}){
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
    this.description = description    
    this.id = generateId()
}

get Template(){
  return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
  <div class="card-body">
      <p class="card-title">Company: ${this.company}</p>
      <p class='card-text'>Job Title: ${this.jobTitle}</p>
      <p class='card-text'>Hours: ${this.hours}</p>
      <p>Rate: ${this.rate}</p>
      <p class="card-text">${this.description}</p>
      <button class="btn btn-success" onclick="app.jobsController.apply('${this.id}')">Apply</button>
  </div>
</div>`
}

}

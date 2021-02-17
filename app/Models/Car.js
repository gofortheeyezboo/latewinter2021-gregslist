import {generateId} from "../Utils/GenerateId.js"

export default class Car{
constructor({make, model, year, price, description, imgUrl, miles}){
  this.make = make
  this.model = model
  this.year = year
  this.price = price
  this.description = description
  this.imgUrl = imgUrl
  this.miles = miles
  this.id = generateId()
}

get Template(){
  return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.carsController.deleteCar('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title">${this.year} ${this.make} - ${this.model}</h4>
      <p>Miles : ${this.miles}</p>
      <p>Price: ${this.price}</p>
      <p class="card-text">${this.description}</p>
      <button class="btn btn-success" onclick="app.carsController.bid('${this.id}')">Bid</button>
  </div>
</div>`
}

}

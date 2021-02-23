import {generateId} from "../Utils/GenerateId.js"

export default class House{
constructor({bedrooms, bathrooms, levels, imgUrl, year, price, description, _id, id}){
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.imgUrl = imgUrl
    this.year = year 
    this.price = price 
    this.description = description    
    this.id = _id || id
}

get Template(){
  return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.houseController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <p class="card-title">Year: ${this.year}</p>
      <p class='card-text'>Bedrooms: ${this.bedrooms} </p>
      <p class='card-text'>Bathrooms: ${this.bathrooms} </p>
      <p>Levels : ${this.levels}</p>
      <p>Price: ${this.price}</p>
      <p class="card-text">${this.description}</p>
      <button class="btn btn-success" onclick="app.houseController.bid('${this.id}')">Bid</button>
  </div>
</div>`
}

}

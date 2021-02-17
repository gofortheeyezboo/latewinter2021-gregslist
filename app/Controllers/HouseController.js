import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

  function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(h => template += h.Template)
    document.getElementById('houses').innerHTML = template
    
  }

export default class HouseController{
  constructor(){
    _draw()
    ProxyState.on("houses", _draw)
  }

  createHouse(event){
    event.preventDefault();
    let form = event.target
    let rawHouse = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        levels: form.levels.value,
        imgUrl: form.imgUrl.value,
        year: parseInt(form.year.value), 
        price: form.price.value, 
        description: form.description.value,
    }
    houseService.createHouse(rawHouse)
  }

  bid(id){
    houseService.bid(id)
  }

  deleteHouse(id){
    houseService.deleteHouse(id)
  }
  unHide(){
    houseService.unHide()
  }
}
import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HouseService{

 
  constructor(){
  }

  createHouse(rawHouse) {
   let newHouse = new House(rawHouse)
   ProxyState.houses = [...ProxyState.houses, newHouse]


  }

  bid(id) {
    let temp = ProxyState.houses
    let house = temp.find(h=> h.id === id)
    house.price += 1000
    ProxyState.houses = temp
  }

  deleteHouse(id) {
    let temp = ProxyState.houses
    let houseIndex = temp.findIndex(h =>  h.id == id)
    temp.splice(houseIndex, 1)
    ProxyState.houses = temp
  }
  unHide(){
    let carsElem = document.getElementById('cars-hide')
    if(carsElem.hidden == false){
    document.getElementById('cars-hide').toggleAttribute('hidden') 
    }
    let jobsElem = document.getElementById('jobs-hide')
    if(jobsElem.hidden == false){
    document.getElementById('jobs-hide').toggleAttribute('hidden')
    }
    let housesElem = document.getElementById('houses-hide')
    if(housesElem.hidden == true ){
    document.getElementById('houses-hide').toggleAttribute('hidden')
    }
    
  }
}

export const houseService = new HouseService()
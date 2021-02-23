import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HouseService{

 
  constructor(){
    this.getHouses()
    
  }
  async getHouses() {
    try {
      const res = await api.get('houses')
      console.log(res);
      ProxyState.houses = res.data.map(rawHouse => new House(rawHouse))
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(rawHouse) {
    try {
      const res = await api.post('houses', rawHouse)
      ProxyState.houses = [ ...ProxyState.houses, new House(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  async bid(id) {
    let house = ProxyState.houses.find(h=> h.id === id)
    house.price += 100
    try {
      const res = await api.put('houses/' + id, house)
      console.log(res.data)
      ProxyState.houses = ProxyState.houses
    } catch (error) {
      
    }
  }

  async deleteHouse(id) {
    try {
      const res = await api.delete(`houses/${id}`)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
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
import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from "./AxiosService.js";

class CarsService{

 
  constructor(){
    this.getCars()
  }
  async getCars() {
    try {
      const res = await api.get('cars')
      ProxyState.cars = res.data.map(rawCarData => new Car(rawCarData))
    } catch (error) {
      console.error(error)
    }
  }
  async createCar(rawCar) {
    try {
      const res = await api.post('cars', rawCar)
      ProxyState.cars = [ ...ProxyState.cars, new Car(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  async bid(id) {
    let car = ProxyState.cars.find(c=> c.id === id)
    car.price += 100
    try {
      const res = await api.put('cars/' + id, car)
      console.log(res.data)
      ProxyState.cars = ProxyState.cars
    } catch (error) { 
    }
  }

  async deleteCar(id) {
    try {
      const res = await api.delete(`cars/${id}`)
      this.getCars()
    } catch (error) {
      console.error(error)
    }
  }
  unHide(){
    let housesElem = document.getElementById('houses-hide')
    if(housesElem.hidden == false){
    document.getElementById('houses-hide').toggleAttribute('hidden') 
    }
    let jobsElem = document.getElementById('jobs-hide')
    if(jobsElem.hidden == false){
    document.getElementById('jobs-hide').toggleAttribute('hidden')

    }
    let carsElem = document.getElementById('cars-hide')
    if(carsElem.hidden == true ){
    document.getElementById('cars-hide').toggleAttribute('hidden')
    }
  }
}

export const carsService = new CarsService()
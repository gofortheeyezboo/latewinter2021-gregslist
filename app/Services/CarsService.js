import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";

class CarsService{

 
  constructor(){
    console.log("cars service");
  }

  createCar(rawCar){
    let temp = ProxyState.cars
    temp.push(new Car(rawCar))
    ProxyState.cars = temp

  }

  bid(id) {
    let temp = ProxyState.cars
    let car = temp.find(c=> c.id === id)
    car.price += 100
    ProxyState.cars = temp
  }

  deleteCar(id) {
    let temp = ProxyState.cars
    let carIndex = temp.findIndex(car =>  car.id == id)
    temp.splice(carIndex, 1)
    ProxyState.cars = temp
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
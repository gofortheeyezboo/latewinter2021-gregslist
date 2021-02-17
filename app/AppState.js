import Car from "./Models/Car.js"
import Job from "./Models/Jobs.js"
import House from "./Models/House.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  cars = [new Car({make: "Jeep", model: "Wrangler", price: 20, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its nice", miles: 75000}), new Car({make: "Jeep", model: "Rango", price: 1500, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its very nice", miles: 5000})]

  /**@type {House[]} */
  houses = [new House({
  bedrooms: 4,
  bathrooms: 2,
  levels: 2,
  imgUrl: 'https://www.familyhomeplans.com/varnish1/image/fit=contain,quality=75/varnish-images/pdf/pinterest/images/56906.jpg?test=2',
  year: 2015,
  price: 1000000,
  description: 'Lovely home for family'}), new House(
    {
      bedrooms: 5,
  bathrooms: 3,
  levels: 2,
  imgUrl: 'https://i2.wp.com/www.literallydarling.com/wp-content/uploads/2016/06/one-company-is-bringing-your-hobbit-dreams-to-life-the-original-shire-in-matamata-new-z-534986.jpg?fit=1280%2C720&ssl=1',
  year: 5,
  price: 1000000000,
  description: 'It is a Hobbit House'

    }
  )]

  /**@type {Job[]} */
  jobs = [new Job({
  company: 'Micron',
  jobTitle: 'Engineer',
  hours: 'full-time',
  rate: '$30 per hour',
  description: 'You are going to be engineering stuff'}), new Job({
  company: 'Boise Code Works',
  jobTitle: 'Instructor',
  hours: 'full-time',
  rate: '$100 per hour',
  description: 'Teaching dummies how to code good and do other stuff good too'})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

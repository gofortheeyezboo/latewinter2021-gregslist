import CarsController from "./Controllers/CarsController.js";
import HouseController from "./Controllers/HouseController.js";
import JobsController from "./Controllers/JobsController.js";
import ValuesController from "./Controllers/ValuesController.js";


class App {
  // valuesController = new ValuesController();
  carsController = new CarsController()
  
  houseController =
  new HouseController()

  jobsController = new JobsController()
  ;
}

window["app"] = new App();

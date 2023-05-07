import TypeVehicle from "./TypeVehicle";
import Car from './vehicles/Car';
import Motorcycle from './vehicles/Motorcycle';

const type = TypeVehicle.MOTORCYCLE;

let vehicles;

if(type === TypeVehicle.CAR){
    vehicles = new Car("Amarelo", 2022, 2.0, 4, 4);
}
else if(type === TypeVehicle.MOTORCYCLE){
    vehicles = new Motorcycle("Preto", 2019, 250);
}
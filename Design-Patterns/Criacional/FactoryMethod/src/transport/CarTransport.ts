import Transport from "./Transport";
import iVehicle from "./vehicles/interfaces/iVehicle";
import Car from './vehicles/Car';

export default class CarTransport extends Transport{
    protected createTransport(): iVehicle {
        console.log("CarTransport.ts");
        return new Car();
    }    
}
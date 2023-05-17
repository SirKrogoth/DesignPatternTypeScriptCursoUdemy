import iAircraft from "../aerial/interfaces/iAircraft";
import iTransportFactory from "../factories/interfaces/iTransportFactory";
import iLandVehicle from "../land/interface/iLandVehicle";

export default class Client{
    private vehicle: iLandVehicle;
    private aircraft: iAircraft;

    constructor(factory: iTransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(): void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}
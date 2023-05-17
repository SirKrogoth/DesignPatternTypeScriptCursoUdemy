import iAircraft from "../aerial/interfaces/iAircraft";
import iLandVehicle from "../land/interface/iLandVehicle";
import iTransportFactory from "./interfaces/iTransportFactory";
import Scooter from '../land/Scooter';
import Drone from "../aerial/Drone";

export default class LimeTransport implements iTransportFactory{
    createTransportVehicle(): iLandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): iAircraft {
        return new Drone();
    }

}
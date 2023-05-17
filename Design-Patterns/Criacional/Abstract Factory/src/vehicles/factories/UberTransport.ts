import iAircraft from '../aerial/interfaces/iAircraft';
import iLandVehicle from '../land/interface/iLandVehicle';
import iTransportFactory from './interfaces/iTransportFactory';
import Car from '../land/Car';
import Airplane from '../aerial/Airplane';

export default class UberTransport implements iTransportFactory{
    createTransportVehicle(): iLandVehicle {
        return new Car();
    }
    createTransportAircraft(): iAircraft {
        return new Airplane();
    }

}
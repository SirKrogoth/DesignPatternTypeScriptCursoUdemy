import iAircraft from '../aerial/interfaces/iAircraft';
import iLandVehicle from '../land/interface/iLandVehicle';
import iTransportFactory from './interfaces/iTransportFactory';
import Motorcycle from '../land/Motorcycle';
import Helicopter from '../aerial/Helicopter';

export default class NineNineTransport implements iTransportFactory{
    createTransportVehicle(): iLandVehicle {
        return new Motorcycle();
    }
    
    createTransportAircraft(): iAircraft {
        return new Helicopter();
    }

}
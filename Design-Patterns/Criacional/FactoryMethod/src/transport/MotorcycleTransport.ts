import Transport from './Transport';
import iVehicle from './vehicles/interfaces/iVehicle';
import Motorcycle from './vehicles/Motorcycle';

export default class MotorcycleTransport extends Transport{
    protected createTransport(): iVehicle {
        return new Motorcycle;
    }

}
import Transport from "./Transport";
import iVehicle from "./vehicles/interfaces/iVehicle";
import Biclycle from './vehicles/Bicycle';

export default class BicycleTransport extends Transport{
    protected createTransport(): iVehicle {
        return new Biclycle();
    }
}
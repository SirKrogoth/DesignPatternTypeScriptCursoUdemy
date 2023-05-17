import iLandVehicle from "../../land/interface/iLandVehicle";
import iAircraft from '../../aerial/interfaces/iAircraft';

export default interface iTransportFactory{
    createTransportVehicle(): iLandVehicle;
    createTransportAircraft(): iAircraft;
}
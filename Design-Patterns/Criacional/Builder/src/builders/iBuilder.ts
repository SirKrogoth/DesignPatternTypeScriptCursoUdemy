import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import eVehicleType from '../components/eVehicleType';
import Engine from "../components/Engine";
import eTransmission from "../components/eTransmission";

export default interface iBuilder{
    reset(): void;
    getVehicle(): Vehicle;
    addWheel(wheel: Wheel);
    setVehicleType(value: eVehicleType);
    setSeats(seats: number);
    setEngine(engine: Engine);
    setTransmission(transmission: eTransmission);
}
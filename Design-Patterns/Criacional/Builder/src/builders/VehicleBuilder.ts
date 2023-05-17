import Engine from "../components/Engine";
import Wheel from "../components/Wheel";
import eTransmission from "../components/eTransmission";
import VehicleType from "../components/eVehicleType";
import Vehicle from "../products/Vehicle";
import iBuilder from "./iBuilder";

export default class VehicleBuilder implements iBuilder{

    private vehicle = new Vehicle();

    reset(): void {
        this.vehicle = new Vehicle();
    }

    getVehicle(): Vehicle {
        const result = this.vehicle;
        this.reset();
        return result;
    }

    addWheel(wheel: Wheel) {
        this.vehicle.addWheel(wheel);
    }

    setVehicleType(value: VehicleType) {
        this.vehicle.eVehicleType = value;
    }

    setSeats(seats: number) {
        this.vehicle.seats = seats;
    }

    setEngine(engine: Engine) {
        this.vehicle.engine = engine;
    }

    setTransmission(transmission: eTransmission) {
        this.vehicle.transmission = transmission;
    }
}
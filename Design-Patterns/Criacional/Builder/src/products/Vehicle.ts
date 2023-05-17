import Engine from "../components/Engine";
import Wheel from "../components/Wheel";
import eTransmission from "../components/eTransmission";
import eVehicleType from "../components/eVehicleType";

export default class Vehicle{
    private _eVehicleType: eVehicleType;
    private _seats: number;
    private _engine: Engine;
    private _transmission: eTransmission
    private _wheels: Wheel[] = [];

    addWheel(wheel: Wheel){
        this._wheels.push(wheel);
    }

    get wheels(): Wheel[]{
        return this._wheels;
    }

    get wheelsTotal(): number{
        return this._wheels.length;
    }

    get eVehicleType(): eVehicleType{
        return this._eVehicleType;
    }

    set eVehicleType(value: eVehicleType){
        this._eVehicleType = value;
    }

    get seats(): number{
        return this._seats;
    }

    set seats(value: number){
        this._seats = value;
    }

    get engine(): Engine{
        return this._engine;
    }

    set engine(value: Engine){
        this._engine = value;
    }

    get transmission(): eTransmission{
        return this._transmission;
    }

    set transmission(value: eTransmission){
        this._transmission = value;
    }
}
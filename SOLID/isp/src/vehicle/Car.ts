import iVehicle from "./iVehicle";
import iVehicleCar from "./iVehicleCar";

export default class Car implements iVehicle, iVehicleCar{

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number
    ){
        this.configurationCar(color, year, engine, seats);
    }

    startVehicle(): void {
        console.log("Ligando os motores.");
    }

    configurationCar(color: string, year: number, engine: number, seats: number): void {
        console.log(`Carro da cor ${color}, do ano ${year}, com motor ${engine} e ${seats}`);
        this.startVehicle();
    }

}
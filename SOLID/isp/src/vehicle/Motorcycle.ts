import iVehicle from "./iVehicle";

export default class Motorcycle implements iVehicle{

    constructor(
        color: string,
        year: number,
        engine: number
    ){
        this.configurationMotorcyle(color, year, engine);
    }

    startVehicle(): void {
        console.log("Ligando os motores.");
    }

    configurationMotorcyle(color: string, year: number, engine: number): void {
        console.log(`Moto da cor ${color}, do ano ${year} e com ${engine} cilindradas.`);
        this.startVehicle();
    }

}
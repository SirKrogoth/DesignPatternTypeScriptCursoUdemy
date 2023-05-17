import iLandVehicle from "./interface/iLandVehicle";

export default class Car implements iLandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos...");
    }
}
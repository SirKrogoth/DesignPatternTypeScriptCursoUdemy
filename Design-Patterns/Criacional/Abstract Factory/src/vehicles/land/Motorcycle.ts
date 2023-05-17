import iLandVehicle from "./interface/iLandVehicle";

export default class Motorcycle implements iLandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Iniciamos a entrega...");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda.");
    }

}
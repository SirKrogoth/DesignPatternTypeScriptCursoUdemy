import iVehicle from "./interfaces/iVehicle";

export default class Motorcycle implements iVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda!");
    }

}
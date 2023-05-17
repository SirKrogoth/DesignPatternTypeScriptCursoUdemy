import iLandVehicle from "./interface/iLandVehicle";

export default class Scooter implements iLandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto de Patinete...");
    }
    getCargo(): void {
        console.log("Eu patinete já aceitei um novo passageiro.");
    }

}
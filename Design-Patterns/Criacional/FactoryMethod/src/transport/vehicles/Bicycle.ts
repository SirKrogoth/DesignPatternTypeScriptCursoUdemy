import iVehicle from "./interfaces/iVehicle";

export default class Bibycle implements iVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto de bicicleta. Bora pedalar");
    }
    getCargo(): void {
        console.log("Pegamos sua encomenda de bicicleta.");
    }

}
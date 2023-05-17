import iAircraft from "./interfaces/iAircraft";

export default class Airplane implements iAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Pegamos os passageiros.");
    }
    checkWind(): void {
        console.log("Ventos a 25km.");
    }

}
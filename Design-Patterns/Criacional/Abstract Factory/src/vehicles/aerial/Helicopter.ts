import iAircraft from "./interfaces/iAircraft";

export default class Helicopter implements iAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Passageiros ok, ligando helices.");
    }
    checkWind(): void {
        console.log("Ventos a 50km, sudeste.");
    }

}
import iAircraft from '../aerial/interfaces/iAircraft';

export default class Drone implements iAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem do Drone.");
    }
    getCargo(): void {
        console.log("Pegamos a encomenda do Drone.");
    }
    checkWind(): void {
        console.log("Ventos a 12km/h a centro oeste.");
    }
    
}
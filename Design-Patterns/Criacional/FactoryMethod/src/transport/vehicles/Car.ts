import iVehicle from "./interfaces/iVehicle";

export default class Car implements iVehicle{

    startRoute(): void {
        console.log("Car.ts");
        this.getCargo();
        console.log("Iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos!");
        this.getTeste();
    }
    getTeste(): void{
        console.log("TESTE DO JOAO");
    }

}
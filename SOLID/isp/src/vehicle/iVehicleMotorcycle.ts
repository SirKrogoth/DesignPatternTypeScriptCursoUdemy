import iVehicle from "./iVehicle";

export default interface iVehicleMotorcycle extends iVehicle{     
    configurationMotorcyle(color: string, year: number, engine: number): void;
}
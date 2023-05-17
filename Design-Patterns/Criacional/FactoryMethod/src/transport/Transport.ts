import iVehicle from './vehicles/interfaces/iVehicle';

export default abstract class Transport { 

    protected abstract createTransport(): iVehicle;
    
    startTransport(): void{
        console.log("Transport.ts");
        const vehicle = this.createTransport();

        vehicle.startRoute();
    }    
}
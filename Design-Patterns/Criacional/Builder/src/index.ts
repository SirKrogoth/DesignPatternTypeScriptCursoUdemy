import VehicleBuilder from './builders/VehicleBuilder';
import Director from './director/Director';
import Vehicle from './products/Vehicle';

const builder = new VehicleBuilder();
const director = new Director(builder);

director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle();

console.log(`Criado um veículo do tipo ${sedan.eVehicleType}, 
com ${sedan.wheelsTotal} rodas.`);

director.constructTruck();

const truck: Vehicle = builder.getVehicle();

console.log(`Criado um veículo do tipo ${truck.eVehicleType}, 
com ${truck.wheelsTotal} rodas.`);

director.constructMotorcycle();

const motorcycle: Vehicle = builder.getVehicle();

console.log(`Criado uma moto do tipo ${motorcycle.eVehicleType}, 
com ${motorcycle.wheelsTotal} rodas.`);
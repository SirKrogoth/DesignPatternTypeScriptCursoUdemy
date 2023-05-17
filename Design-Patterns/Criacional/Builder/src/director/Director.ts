import iBuilder from "../builders/iBuilder";
import Engine from "../components/Engine";
import Wheel from "../components/Wheel";
import eTransmission from "../components/eTransmission";
import eVehicleType from '../components/eVehicleType';

export default class Director{
    
    constructor(private builder: iBuilder){
        

    }

    constructSedanCar(){
        this.builder.setVehicleType(eVehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTransmission(eTransmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1600));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
    }

    constructTruck(){
        this.builder.setVehicleType(eVehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTransmission(eTransmission.AUTOMATIC);
        this.builder.setEngine(new Engine(13000));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
    }

    constructMotorcycle(){
        this.builder.setVehicleType(eVehicleType.MOTORCYCLE);
        this.builder.setSeats(2);
        this.builder.setTransmission(eTransmission.MANUAL);
        this.builder.setEngine(new Engine(125));
        this.builder.addWheel(new Wheel(12));
        this.builder.addWheel(new Wheel(12));
    }

}
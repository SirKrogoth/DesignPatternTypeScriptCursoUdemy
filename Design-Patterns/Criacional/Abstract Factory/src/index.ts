import Client from "./vehicles/client/Client";
import Company from "./vehicles/const/Company";
import UberTransport from "./vehicles/factories/UberTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import LimeTransport from './vehicles/factories/LimeTransport';
import iTransportFactory from "./vehicles/factories/interfaces/iTransportFactory";

const currentCompany = Company.LIME;
let factory: iTransportFactory;

switch(currentCompany){
    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    case Company.LIME:
        factory = new LimeTransport();
        break;
    default:
        console.error("Companhia desconhecida.");
        break;
}

const client = new Client(factory!);

client.startRoute();

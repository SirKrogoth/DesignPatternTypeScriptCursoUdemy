import PayonnerAdapter from "./adapters/PayonnerAddapter";
import MercadoPagoAdapter from './adapters/MercadoPagoAdapter';

import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

import Payonner from "./payonner/Payonner";
import MercadoPago from "./mercadoPago/MercadoPago";

import { PaymentTypes } from './PaymentTypes';


const origin = PaymentTypes.PAYONNER;
let payment: IPayPalPayment;

switch(origin){
    case PaymentTypes.MERCADOPAGO:
        payment = new MercadoPagoAdapter(new MercadoPago());
        break;
    case PaymentTypes.PAYONNER:
        payment = new PayonnerAdapter(new Payonner());
        break;
    default:
        payment = new PayPal();
        break;
}

//const payment: IPayPalPayment = new PayPal();
//const payment: IPayPalPayment = new PayonnerAdapter(new Payonner);
//const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago);

payment.payPalPayment();
payment.payPalReceive();
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";
import MercadoPago from '../mercadoPago/MercadoPago';

export default class MercadoPagoAdapter implements IPayPalPayment {

    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando o Mercado Pago utilizando os métodos do PayPal.");
    }

    authToken(): Token {
        return this.mercadoPago.authToken();
    }

    payPalPayment(): void {
        return this.mercadoPago.enviarPagamentoMercadoPago();
    }
    
    payPalReceive(): void {
        return this.mercadoPago.receberPagamentoMercadoPago();
    }

}
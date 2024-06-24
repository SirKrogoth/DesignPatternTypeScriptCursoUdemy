import IPayPalPayment from '../paypal/IPayPalPayment';
import Token from '../utils/Token';
import Payonner from '../payonner/Payonner';

export default class PayonnerAdapter implements IPayPalPayment {

    constructor(private payonner: Payonner){
        console.log("Adaptando o Payonner utilizando os métodos e padrões do PayPal.");
    }

    authToken(): Token {
        return this.payonner.authToken();
    }

    payPalPayment(): void {
        return this.payonner.sendPaymentPayonner();
    }

    payPalReceive(): void {
        return this.payonner.receivePaymentPayonner();
    }

    
}
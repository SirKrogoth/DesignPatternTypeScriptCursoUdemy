import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment {
    
    private token: Token;

    authToken(): Token {
        return new Token();
    }

    sendPaymentPayonner(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.getToken());
        console.log("Enviando pagamentos via Payonner.");
    }

    receivePaymentPayonner(): void {
        console.log("Recebendo pagamentos via Payonner.");
    }

}
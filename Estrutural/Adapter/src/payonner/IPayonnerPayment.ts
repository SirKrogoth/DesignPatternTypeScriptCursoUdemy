import Token from "../utils/Token";

export default interface IPayonnerPayment {
    authToken(): Token;
    sendPaymentPayonner(): void;
    receivePaymentPayonner(): void;    
}
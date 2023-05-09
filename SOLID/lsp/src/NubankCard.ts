import iPaymentInstrument from "./iPaymentInstrument";

export default abstract class NubankCard implements iPaymentInstrument{
    validate(): void {
        console.log("Validação básica.");
    }

    collectPayment(): void {
        console.log("Pagamento realizado.");
    }

}
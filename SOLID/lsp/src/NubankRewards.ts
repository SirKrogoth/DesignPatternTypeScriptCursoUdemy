import iPaymentInstrument from "./iPaymentInstrument";

export default class NubankRewards implements iPaymentInstrument{
    validate(): void {
        console.log("Verificar a pontuação no rewards.");
    }
    collectPayment(): void {
        console.log("Pagar com a pontuação do rewards.");
    }

}
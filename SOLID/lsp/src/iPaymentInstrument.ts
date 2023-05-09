export default interface iPaymentInstrument{
    validate(): void;
    collectPayment(): void;
}
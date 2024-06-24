import Token from '../utils/Token';
import IMercadoPago from './IMercadoPago';

export default class MercadoPago implements IMercadoPago {

    private token: Token;

    authToken(): Token {
        return new Token();
    }

    enviarPagamentoMercadoPago(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.getToken());
        console.log("Enviando pagamento via Mercado Pago");
    }

    receberPagamentoMercadoPago(): void {
        console.log("Recebendo pagamento via Mercado Pago");
    }

}
import Token from "../utils/Token";

export default interface IMercadoPago { 
    authToken(): Token;
    enviarPagamentoMercadoPago(): void;
    receberPagamentoMercadoPago(): void;    
}
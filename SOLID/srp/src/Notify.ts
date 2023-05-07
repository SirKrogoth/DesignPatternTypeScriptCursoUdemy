import Client from "./Client";

export default class Notify{
    
    constructor(private client: Client){

    }

    sendEmail(): boolean{
        console.log("Enviando email para " + this.client.email + ".")
        this.client.email;

        console.log("Email enviado com sucesso.");

        return true;
    }
}
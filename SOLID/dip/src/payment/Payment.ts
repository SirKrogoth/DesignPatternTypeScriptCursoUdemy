import MysqlProduct from "../model/MysqlProduct";

export default class Payment {

    pay(productId: number): void{ 
        const dbProduct = new MysqlProduct();
        const product = dbProduct.getProductById(productId);

        console.log(product);
    }
}
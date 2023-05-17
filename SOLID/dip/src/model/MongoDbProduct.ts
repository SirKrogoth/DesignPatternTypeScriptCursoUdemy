import iDbProduct from './iDbProduct';

export default class MongoDbProduct implements iDbProduct {
    
    getProductById(productId: number): string {
            return `MongoDB: exibindo os dados do produto ${productId}.`;
    }

}
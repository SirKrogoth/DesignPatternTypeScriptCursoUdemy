import iDbProduct from './iDbProduct';

export default class MysqlProduct implements iDbProduct {
    getProductById(productId: number): string {
            return `MYSQL: Exibindo dados do produto: ${productId}`;
    }
}
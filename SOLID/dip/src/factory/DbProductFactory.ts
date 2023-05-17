import iDbProduct from "../model/iDbProduct";
import Db from '../model/Db';
import MysqlProduct from "../model/MysqlProduct";
import MongoDbProduct from "../model/MongoDbProduct";

export default class DbProductFactory {

    private static type: Db = Db.MYSQL;

    public static create(): iDbProduct {
        if(DbProductFactory.type === Db.MYSQL){
            return new MysqlProduct();
        } else if(DbProductFactory.type === Db.MONGODB){
            return new MongoDbProduct();
        }
    }
}
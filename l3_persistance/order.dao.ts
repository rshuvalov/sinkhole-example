// core dependencies
import DbClient from 'core/db.client';

// common interfaces
import IOrder from 'interfaces/order.interface';

class OrderDao {
  private dbClient: DbClient;

  constructor(dbClient: DbClient) {
    this.dbClient = dbClient;
  }

  findById(id: number): IOrder {
    const sql: string = `SELECT * FROM "order" WHERE id = ${id}`;
    return this.dbClient.exec<IOrder>(sql);
  }

  insert(user: IOrder): IOrder {
    const sql: string = `INSERT INTO "order" VALUES (${user.id}, ${user.createdAt})`;
    return this.dbClient.exec<IOrder>(sql);
  }
}

export default OrderDao;
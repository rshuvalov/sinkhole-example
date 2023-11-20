// core dependencies
import DbClient from 'core/db.client';

// common interfaces
import IUser from 'interfaces/user.interface';

class UserDao {
  private dbClient: DbClient;

  constructor(dbClient: DbClient) {
    this.dbClient = dbClient;
  }

  findById(id: number): IUser {
    return this.dbClient.exec<IUser>(
      `SELECT * FROM "users" WHERE id = ${id}`
    );
  }

  insert(user: IUser): IUser {
    return this.dbClient.exec<IUser>(
      `INSERT INTO "users" VALUES (${user.id}, ${user.createdAt})`
    );
  }
}

export default UserDao;
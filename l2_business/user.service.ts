// common interfaces
import IUser from 'interfaces/user.interface';

// persistance layer (next layer)
import UserDao from 'l3_persistance/user.dao';

class UserService {
  private userDao: UserDao;

  constructor(userDao: UserDao) {
    this.userDao = userDao;
  }

  getInfo(userId: number): IUser {
    return this.userDao.findById(userId);
  }

  save(user: IUser): IUser {
    return this.userDao.insert(user);
  }
}

export default UserService;
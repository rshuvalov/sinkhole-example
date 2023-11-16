// common interfaces
import IOrder from 'interfaces/order.interface';

// persistance layer (next layer)
import OrderDao from 'l3_persistance/order.dao';

class OrderService {
  private orderDao: OrderDao;

  constructor(userDao: OrderDao) {
    this.orderDao = userDao;
  }

  save(user: IOrder): IOrder {
    return this.orderDao.insert(user);
  }
}

export default OrderService;
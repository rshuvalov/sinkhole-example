// common interfaces
import IOrder from 'interfaces/order.interface';

// presentalion layer dependencies (same layer)
import OrderDto from '../dto/order.dto';

class Order implements IOrder {
  id: number;
  createdAt: Date;

  constructor(userDto: OrderDto) {
    this.id = userDto.id;
    this.createdAt = new Date();
  }
}

export default Order;
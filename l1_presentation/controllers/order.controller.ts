// core dependencies
import { Controller, Post, Body } from 'core';

// common interfaces
import IOrder from 'interfaces/order.interface';

// presentalion layer dependencies (same layer)
import OrderDto from '../dto/order.dto';
import Order from '../entities/order';

// business layer (next layer)
import OrderService from 'l2_business/order.service';

@Controller
class OrderController {
  private orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  @Post('/orders')
  post(@Body orderDto: OrderDto): IOrder {
    const order = new Order(orderDto);
    return this.orderService.save(order);
  }
}
// core dependencies
import { Controller, Get, Post, Param, Body } from 'core';

// common interfaces
import IUser from 'interfaces/user.interface';

// presentalion layer dependencies
import User from '../entities/user';
import UserDto from '../dto/user.dto';

// business layer (next layer)
import UserService from 'l2_business/user.service';

@Controller
class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Get('/users/:userId')
  get(@Param userId: number): IUser {
    return this.userService.getInfo(userId);
  }

  @Post('/users')
  post(@Body userDto: UserDto): IUser {
    const user: IUser = new User(userDto);
    return this.userService.save(user);
  }
}
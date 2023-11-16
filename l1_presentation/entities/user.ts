// common interfaces
import IUser from 'interfaces/user.interface';

// presentalion layer dependencies (same layer)
import UserDto from '../dto/user.dto';

class User implements IUser {
  id: number;
  createdAt: Date;

  constructor(userDto: UserDto) {
    this.id = userDto.id;
    this.createdAt = new Date();
  }
}

export default User;
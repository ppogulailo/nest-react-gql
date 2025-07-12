import { User } from './models/User';
import {
  Resolver,
  Query,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserSetting } from './models/UserSetting';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => User)
  getUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUser(id);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.mockUsers;
  }

  @ResolveField(() => UserSetting, { name: 'setting', nullable: true })
  getUserSettings(@Parent() user: User) {
    console.log(user);
    return this.userService.getUserSettings(user.id);
  }
}

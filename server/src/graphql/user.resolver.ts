import { User } from './models/User';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query((returns) => User)
  getUser() {
    return {
      id: 1,
      displayName: 'Remind GQL',
      username: 'UserName',
    };
  }
}

import { Injectable } from '@nestjs/common';
import { User } from './models/User';
import { UserSetting } from './models/UserSetting';
import { CreateUserInput } from './utils/create-user.input';

@Injectable()
export class UserService {
  mockUserSettings = {
    receiveEmails: false,
    receiveNotification: true,
    userId: 1,
  };

  mockUsers: User[] = [
    {
      id: 1,
      username: 'John',
      displayName: 'john@gmail.com',
      setting: this.mockUserSettings,
    },
    {
      id: 2,
      username: 'Mark',
      displayName: 'mark@gmail.com',
      setting: this.mockUserSettings,
    },
  ];

  getUser(id: number): User {
    return this.mockUsers.find((user) => user.id === id) as unknown as User;
  }

  getUserSettings(id: number): UserSetting {
    return this.mockUsers.find((user) => user.id === id)
      ?.setting as unknown as UserSetting;
  }

  createUser(createUserInput: CreateUserInput): User {
    const user = {
      ...createUserInput,
      // get last userId
      id: this.mockUsers[this.mockUsers.length - 1].id + 1,
    };
    this.mockUsers.push(user);
    return this.getUser(user.id);
  }
}

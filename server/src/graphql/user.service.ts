import { Injectable } from '@nestjs/common';
import { User } from './models/User';
import { UserSetting } from './models/UserSetting';

@Injectable()
export class UserService {
  mockUserSettings = {
    receiveEmails: false,
    receiveNotification: true,
    userId: 1,
  };

  mockUsers = [
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
}

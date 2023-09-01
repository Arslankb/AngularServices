import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UserService {

  constructor(private loggerService: LoggerService) { }

  users: User[] = [
    new User('Steve Smith', 'Male', 'Monthly', 'Active'),
    new User('Mary Jane', 'Female', 'Yearly', 'Inactive'),
    new User('John Smith', 'Male', 'Quarterly', 'Active'),
  ];

  getAllUsers(){
    return this.users;
  }

  createUsers(name: string, gender: string, subType: string, status: string){
    let user = new User(name, gender, subType, status);
    this.users.push(user);

    //let logger = new LoggerService();
    this.loggerService.logMessage(name, status);
  }
}

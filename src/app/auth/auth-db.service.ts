import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

@Injectable()
export class AuthDbService {
  constructor(private http: HttpClient) { }
  doLogin(id: number, secret: string): number{
  	this.http.get<User>("http://localhost:8081/user/"+id);
	return 1;
  }
  addUser(user: User) {
  	this.http.post<User>("http://localhost:8081/useradd/", user);
  }
  updateUser(id: number, user: User) {
  	this.http.post<User>("http://localhost:8081/userchange/"+id, user);
  }
  deleteUser(id: number) {
  	return this.http.get<User>("http://localhost:8081/userdel/"+id);
  }
}

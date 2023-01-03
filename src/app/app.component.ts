import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { UserInterface } from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: UserInterface[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService
      .getUsers()
      .subscribe((users: UserInterface[]) => (this.users = users));
  }

  removeUser(id: string): void {
    this.usersService
      .removeUser(id)
      .subscribe(
        () => (this.users = this.users.filter((user) => user.id !== id))
      );
  }

  addUser(name: string): void {
    this.usersService
      .addUser(name)
      .subscribe((newUser: UserInterface) => this.users.push(newUser));
  }
}

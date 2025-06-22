import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TaskComponent } from './task/task.component';
import { User } from './core/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, UserComponent, TaskComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<User | undefined>(undefined)

  onSelectedUser(id: string) {
    this.selectedUser.set(this.users.find((user) => user.id === id));
  }
}

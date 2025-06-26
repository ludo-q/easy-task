import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';
import { User } from './core/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<User | undefined>(undefined)

  onSelectedUser(id: string) {
    this.selectedUser.set(this.users.find((user) => user.id === id));
    console.log(this.selectedUser());
  }
}

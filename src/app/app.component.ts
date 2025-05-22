import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, UserComponent, TaskComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName = signal<string | undefined>(DUMMY_USERS[0].name);

  onSelectedUser(id: string) {
    this.selectedUserName.set(
      DUMMY_USERS.find((user) => user.id === id)?.name
    );
  }
}

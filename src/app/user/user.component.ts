import { Component, computed, input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 avatar = input.required<string>();
 name = input.required<string>();
 avatarUrl = computed(() => `assets/imgs/users/${this.avatar()}`)
 avatarAlt = computed(() => `Image avatar, ${this.avatar()}`)

  onSelectUser() {
    console.log('Clicked!');
  }
}

import { Component, computed, input, output } from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 user = input.required<User>();
 onSelected = output<string>();

 avatarUrl = computed(() => `assets/imgs/users/${this.user().avatar}`)
 avatarAlt = computed(() => `Image avatar, ${this.user().avatar}`)

  onSelect() {
    this.onSelected.emit(this.user().id);
  }
}

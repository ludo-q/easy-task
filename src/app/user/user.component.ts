import { Component, computed, input, output } from '@angular/core';
import { User } from '../core/user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
 user = input.required<User>();
 selected = input.required<boolean>();
 onSelected = output<string>();

 avatarUrl = computed(() => `assets/imgs/users/${this.user().avatar}`)
 avatarAlt = computed(() => `Image avatar, ${this.user().avatar}`)

  onSelect() {
    this.onSelected.emit(this.user().id);
  }
}

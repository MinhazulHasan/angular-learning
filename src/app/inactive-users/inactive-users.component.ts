import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users!: string[];
  inactiveToActive!: number;

  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.users = this.userService.inActiveUsers;
    this.inactiveToActive = this.counterService.inactiveToActiveCounter;
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}

import { Component, DoCheck, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements DoCheck {
  count!: number;
  constructor(private userService: UserService) { }

  ngDoCheck(): void {
    this.count = this.userService.count;
  }
}

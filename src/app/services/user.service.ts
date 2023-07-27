import { CounterService } from './counter.service';
import { Injectable } from "@angular/core";

@Injectable()

export class UserService {
    activeUsers = ['Max', 'Anna'];
    inActiveUsers = ['Chris', 'Manu'];
    count: number = 0;

    constructor(private counterService: CounterService) { }
  
    onSetToInactive(id: number) {
      this.inActiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.incrementActiveToInactive();
      this.count++;
    }
  
    onSetToActive(id: number) {
      this.activeUsers.push(this.inActiveUsers[id]);
      this.inActiveUsers.splice(id, 1);
      this.counterService.incrementInactiveToActive();
      this.count++;
    }
}
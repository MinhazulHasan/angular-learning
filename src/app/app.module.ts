import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UserService } from './services/user.service';
import { CountComponent } from './count/count.component';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    CountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

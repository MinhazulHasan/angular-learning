import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveAssignmentComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

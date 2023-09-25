import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './shared-ui/ui/material-ui.module';
import { HeaderComponent } from './core/ui/header/header.component';
import { UserTableComponent } from './core/ui/user-table/user-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordScreenComponent } from './core/ui/password-screen/password-screen.component';
import { TodoListComponent } from './core/todo-list/todo-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserTableComponent,
    PasswordScreenComponent,
    TodoListComponent,
   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialUiModule,
    HttpClientModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

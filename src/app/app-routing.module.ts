import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordScreenComponent } from './core/ui/password-screen/password-screen.component';
import { UserTableComponent } from './core/ui/user-table/user-table.component';
import { TodoListComponent } from './core/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component:UserTableComponent
  },

  {
    path: 'password-screen',
    component:PasswordScreenComponent
  },
  {
    path: ' ', redirectTo:"password-screen", pathMatch:"full"
  },
  {
   path:'todo-list', 
   component:TodoListComponent
  },
  {
    path: 'user-table',
    component:UserTableComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

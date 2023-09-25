import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataService  } from 'src/app/core/ui/services/data.service';



export interface Table_Users{
      id: number,
      name: string,
      avatar: string,
      username: string,
      password:string,
}



@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'], 
  
})
export class UserTableComponent {
 
  displayedColumns: string[] = ['id', 'name', 'username','avatar'];
  users: Table_Users[] = [];
  dataSource = this.users;
  clickedRows = new Set<Table_Users>();
  constructor(private dataService:DataService, private router : Router){    
    this.dataService.getJsonData().subscribe((res: any)=>{
    this.users = res;
    }); 
  }
    
  formnext( name: String, avatar:String){
    this.router.navigate(['/password-screen',{ name :name, avatar:avatar}])
  }
}



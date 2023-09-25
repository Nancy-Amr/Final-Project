import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password-screen',
  templateUrl: './password-screen.component.html',
  styleUrls: ['./password-screen.component.scss']
})
export class PasswordScreenComponent  {
  hide = true;
  name: any;
  username: string = "";
  avatar:any;
  password: any;
  userid: any;
  userpass: string = "";
  element:any;
  validate1:boolean=false;
  validate2:boolean=false;


  constructor(private route : ActivatedRoute, private service:DataService,private router:Router) {} 
  apiurl='http://localhost:4000/users.json';

   
  
  ngOnInit(){
     this.route.paramMap.subscribe(paramMap => {
      debugger;
      this.name = paramMap.get('name');
      this.avatar=paramMap.get('avatar');
      
    });
  }
  submitForm() {
   
    //alert ((<HTMLInputElement>document.getElementById("userid")).value) ;
    //alert ((<HTMLInputElement>document.getElementById("userpass")).value) ;
    this.userid = (<HTMLInputElement>document.getElementById("userid")).value  ;
    this.userpass = (<HTMLInputElement>document.getElementById("userpass")).value  ;
    
    if (this.userid == '' || this.userpass == ''){
      alert ('you should enter user and password' ) ;
      
    }else{
     
    this.service.getJSON().subscribe((data:any) => {
      data.forEach((element:any)=> {  
     
       // alert (this.userid) ;      
        if  (this.userid == element.username) {
          this.validate1=true;
          if (this.userpass == element.password) {
            this.validate2=true;
            //alert (element.id) ;
            this.router.navigate(['/todo-list',{ id :element.id, name: element.name,avatar: element.avatar}])
              
          }else{
            alert("wrong password");
          }
          }    
    });
    if(this.validate1 == false ){
      alert("wrong username");
    }else if(this.validate2 == false) {
      alert("wrong password");
    }

  });
  }
}

}
 



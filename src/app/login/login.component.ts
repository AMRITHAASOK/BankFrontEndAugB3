import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//string interpolation - {{aim}} in html file
  aim="Your perfect banking partner";
//property binding -[placeholder]="account" in html file
  account="Enter ur account here";

  acno='';
  pswd='';
  //(3rd execution)
//class - Collection of properties and methods
//properties/variables 
//userdefined methods(4th execution)

//database
  userDetails:any={
    1000:{acno:1000,username:'sanil',password:1000, balance:1000},
    1001:{acno:1001,username:'Akhil',password:1001, balance:1000},
    1002:{acno:1002,username:'Aravind',password:1002, balance:1000}
  }


  constructor() {//(1st execution)
    //It automatically invokes when the object is created.
   }

  ngOnInit(): void {//(2nd execution)
    //For initial process of component 
    //lifecycle hook of Angular
  }
 
  
    
    acnoChange(event:any){
      console.log(event);
      
      this.acno=event.target.value;//1000
      console.log(this.acno);//1000
      

    }
    pswdChange(event:any){
      this.pswd =event.target.value;
      console.log(this.pswd);
      
    }
    login(){
      // alert('Login clicked');
      var acno=this.acno;
      var pswd=this.pswd;
      var userDetails=this.userDetails;

      if(acno in userDetails){
        if(pswd==userDetails[acno]['password']){
          alert('login successful');
        }
        else{
          alert('Invalid password');
        }
      }
      else{
        alert('Invalid user details');
      }

    }
}

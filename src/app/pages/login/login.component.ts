import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit()
  {
    console.log("login button click");
    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
        this.snack.open("username is required",'',{duration:1000,})
        return;        
    }
  
    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
        this.snack.open("password is required",'',{duration:1000,});
        return;        
    }
    
    //request server to generate token

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        //login
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect ADMIN for admin dashboard
            //redirect NORAMl for normal dashboard
            if(this.login.getUserRole()=="ADMIN")
            {
              //window.location.href="/admin";
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            }
            else if(this.login.getUserRole()=="NORMAL")
            {
              //window.location.href="/user-dashboard"
              this.router.navigate(['user-dashboard'])
              this.login.loginStatusSubject.next(true);
            }
            else
            {
              this.login.logout();
            }
          },
          ()=>{}
        )



      },(error)=>{
        console.log("error !");
        console.log(error);
        this.snack.open("Invalid username or password !! Try again",'',{duration:1000})
      }
    )
  }
     
}


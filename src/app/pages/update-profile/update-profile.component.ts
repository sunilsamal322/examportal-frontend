import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  user:any;

  constructor(private _login:LoginService,private _router:Router,private _snack:MatSnackBar) { }

  ngOnInit(): void {

    this.user=this._login.getUser();
  }
  updateProfile()
  {
    this._login.updateUser(this.user).subscribe((data)=>{
      Swal.fire("Success","Profile Updated","success")
    },(error)=>{
        this._snack.open("Error in updating profile","Try after some time",{duration:3000})
    })
  }
}

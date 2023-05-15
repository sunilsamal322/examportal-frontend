import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }


  //get current user
  public getCurrentUser()
  {
    return this.http.get(`${baseurl}/current-user`);
  }

  //generate token

  public generateToken(loginData:any)
  {
      return this.http.post(`${baseurl}/generate-token`,loginData);
  }

  //login user : set token in localstorage

  public loginUser(token: any)
  {
    localStorage.setItem("token",token);
    return true;
  }

  //islogin :user is logged in or not

  public isLoggedin()
  {
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr == '' || tokenStr==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  //logout : remove token from localstorage
  
  public logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    return true;
  }
  
  //get token
  public getToken()
  {
    return localStorage.getItem("token");
    
  }
  //set user details

  public setUser(user:any)
  {
    localStorage.setItem('user',JSON.stringify(user));
  }
  //get user
  public getUser()
  {
    let userStr=localStorage.getItem("user");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else
    {
      this.logout();
      return null;
    }
  }
  //get user role
  public getUserRole()
  {
    let user=this.getUser();
    //it consider only single role for multiple role we can return list or direct user.authorities;
    return user.authorities[0].authority;
  }
  //update user
  public updateUser(user:any)
  {
    return this.http.put(`${baseurl}/user/`,user);
  }

}

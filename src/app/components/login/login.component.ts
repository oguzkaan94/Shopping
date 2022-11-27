import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login:FormGroup|any;
  constructor(private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.login = new FormGroup({
      'username':new FormControl(),
      'password':new FormControl()
    })
  }

  logindata(login: any) {
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.login.value.username && a.password === this.login.value.password ;
      });
      if(user){
        alert('You are successfully login');
        this.login.reset();
        this.router.navigate(['products']);
      }else {
        alert('User Not Found');
        this.router.navigate(['login']);
      }
    },err=>{
      alert('Something has wrong');
    })
  }   
}


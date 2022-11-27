import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup! : FormGroup;
  signUser:any;
  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    this.signup = new FormGroup({
      'username':new FormControl(),
      'password':new FormControl()
    })
  }

  signupdata(signup:FormGroup){
    this.signUser =this.signup.value.username
    this.http.post<any>("http://localhost:3000/signup",this.signup.value).subscribe(res=>{
      this.toastr.success(this.signUser,'You are successfully signup');
      this.signup.reset();
      this.router.navigate(['login']);
    },err=>{
      alert('Something went wrong');
    });

  }
}
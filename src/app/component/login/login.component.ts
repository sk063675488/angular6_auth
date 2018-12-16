import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private formbuilder:FormBuilder, private route:Router, private _authSer:AuthGuardService) { 
    this.form = formbuilder.group({
      email: ['',[Validators.required, Validators.email  ]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit() {
  }
  login(){
    if(this.form.valid){
      this._authSer.sendToken(this.form.value.email)
      this.route.navigate(['admin'])
    }
  }

}

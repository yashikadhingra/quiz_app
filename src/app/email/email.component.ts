import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
public form:FormGroup;
  constructor(public af: AngularFireAuth, private router: Router,private formBuilder:FormBuilder) { 
  this.form=this.formBuilder.group({
  email:['',Validators.required],
  password:['',Validators.required]
  });
}
  login(){
   const email = this.form.get('email').value;
  const password = this.form.get('password').value;
  console.log(email);
  this.af.auth.signInWithEmailAndPassword(email,password)
 .then((result)=>{
      this.authenticated = true;
      console.log('Signed in successfully!');
	    this.router.navigate(['/quiz']);
    }).catch((err)=>{
	  this.error = err;
      this.authenticated = false;
      console.log('Error signing in: ',err);
    })
  } 
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
 import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';  
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
error: any;
userinfo:Array<any> = [];
  constructor(public af: AngularFireAuth, private router: Router, public afs:AngularFirestore, private formBuilder:FormBuilder) { 
  this.userinfo=this.afs.collection('users');
    this.form=this.formBuilder.group({
  email:['',Validators.required],
  password:['',Validators.required]
  });
  }
signup() {    
   const email = this.form.get('email').value;
  const password = this.form.get('password').value;
  console.log(email);
  this.af.auth.createUserWithEmailAndPassword(email,password)
 .then((result)=>{
      this.authenticated = true;
      console.log('Signed in successfully!');
	  this.af.auth.currentUser.updateProfile({
		email: this.email
	 }).then(() => {
          this.router.navigate(['/quiz']);
            })
			}).catch((err)=>{
	  this.error = err;
      this.authenticated = false;
      console.log('Error signing in: ',err);
    });
   
 
  ngOnInit() {
  }

}

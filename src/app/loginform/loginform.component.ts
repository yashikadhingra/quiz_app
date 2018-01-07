import { Component, OnInit, Output, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { EventEmitter } from "events";
import { Router } from "@angular/router";

import { QuizComponent } from './components/quiz/quiz.component';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
 user: Observable<firebase.User>;
error: any;
  constructor(public af: AngularFireAuth, private router: Router) {

      this.af.authState.subscribe(auth => { 
      if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;
		 //this.router.navigateByUrl('/quiz');
        }
    });

  }


  loginGoogle() {
     this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
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
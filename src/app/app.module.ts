import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { environment } from '../environments/environment';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizService } from './services/quiz.service';
import { LoginformComponent } from './loginform/loginform.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    LoginformComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,

  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	  FormsModule,
	  ReactiveFormsModule,
    HttpModule,
	AngularFireModule.initializeApp(environment.firebase,'newapp'),
	 AngularFireDatabaseModule,
	AngularFirestoreModule,
	AngularFireAuthModule,
	routes
  ], 	
  providers: [QuizService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

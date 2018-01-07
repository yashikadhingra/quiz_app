import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginformComponent },
    { path: 'quiz', component: QuizComponent },
	 { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
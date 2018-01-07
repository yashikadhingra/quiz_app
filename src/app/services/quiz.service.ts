import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import { Quiz } from '../models/quiz';
@Injectable()
export class QuizService {
quizCollection:AngularFirestoreCollection<Quiz>;
quizzes:Observable<Quiz[]>;
  constructor(public afs:AngularFirestore) {
this.quizzes=this.afs.collection('questionset').valueChanges();

  }
getQuestions(){
return this.quizzes;
}
}


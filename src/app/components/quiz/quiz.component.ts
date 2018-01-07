import { Component, OnInit  } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { QuizService } from '../../services/quiz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  provider: [QuizService]
})
export class QuizComponent implements OnInit{
quizzes:Quiz[];
optionset:Array<any> = [];
 private _prevSelected: any;
answer:number;
option_id:number;
score:number;
count:number;
 isValid:true;
quizset:Array<any> = [];
constructor(private qs:QuizService) {	
this.score=0;
this.count=0;
}

ngOnInit() {
this.isValidForm(false);
this.qs.getQuestions().subscribe(quizzes => {
this.quizzes=quizzes;
this.quizset=this.quizzes[this.count];
console.log(this.quizset);
for (var i=0;i<quizzes.length;i++){
this.optionset.push(quizzes[i].options);
}
  });
this.quizset=this.optionset[0];
  }

checkanswer($event:any){
 this.isValidForm(true);
//$event.target.parentElement.children.classList.remove('selected');
this.option_id=$event.target.attributes.id.value.split("_",2)[1];
this.answer=$event.target.attributes.answer.value;
//$event.target.classList.add('selected');
console.log(this.option_id+"======"+this.answer);
}
isValidForm(isValid) {
this.isValid=isValid;
console.log(this.isValid);
    return this.isValid
}
submit(){

	if(this.option_id==this.answer){
	this.score=this.score+1;
	}
	this.count=this.count+1;
	this.quizset=this.quizzes[this.count];
	this.option_id=0;
	this.answer=0;
	 this.isValidForm(false);
	 }

}


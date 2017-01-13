import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {Question} from '../question'
import {QuestionItemComponent} from './question-item.component'
import {QuestionServiceService} from '../question-service.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  @Input() qs: Question;
qsItem: Question;
questions: Question[]=[];

@Output() questionSelected= new EventEmitter<Question>();

  constructor(private questionservice:QuestionServiceService) { }

  ngOnInit() {
 this.questions=this.questionservice.getQuestions(); 
  //  this.questions.push(this.qs);
 console.log(this.questions); 
}

// passItem() {
//   this.questionSelected.emit(this.qs);
//   this.questions.push(this.qs);
// }

}


import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AskService } from './ask.service'
import { Question } from '../questions/question'
import { QuestionServiceService } from '../questions/question-service.service';


@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',

})
export class QuestionAddComponent implements OnInit {
  clearDescript: any;
  clearQs: any;
  questionItem: Question;
  @Output() cleared = new EventEmitter();
  @Output() qs = new EventEmitter<Question>();
  constructor() { }

  ngOnInit() {
  }
  // passes the question on clicking post  ,it consoles it
  onSubmit(value: any) {
    console.log(value.qtitle);
    this.questionItem = new Question(value.qtitle, value.description, []);
    console.log(this.questionItem);
    this.onClear();

  }
  //to clear form on posting
  onClear() {
    this.clearDescript = null;
    this.clearQs = null;
    this.cleared.emit(null);
  }
  onSelected(questionItem: Question) {
    this.qs.emit(questionItem);
    console.log(this.questionItem);

  }

}

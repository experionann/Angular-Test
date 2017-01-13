import { Component, OnInit } from '@angular/core';
import { Answers } from '../questions/answers'
import { AskService } from './ask.service'

@Component({
  selector: 'app-ask-questions',
  templateUrl: './ask-questions.component.html',

})
export class AskQuestionsComponent implements OnInit {
  items: Answers[] = [];
  constructor(private as: AskService) { }

  ngOnInit() {
    this.items = this.as.getItems();
  }


}

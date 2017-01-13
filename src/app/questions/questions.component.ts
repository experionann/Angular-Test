import { Component, OnInit } from '@angular/core';
import { Question } from './question'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedQuestion: Question;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-start',
  template: `
    <h1>
     Please select a question
    </h1>
  `,
  styles: []
})
export class QuestionStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

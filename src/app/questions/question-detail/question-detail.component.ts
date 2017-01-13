import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../question'
import { AskService } from '../../ask-questions/ask.service'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Rx';
import { QuestionServiceService } from '../question-service.service'


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styles: [`  #answernow{    margin-left: 24px;}`]
})
export class QuestionDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  selectedQuestion: Question;
  private answerTextBoxFlag = false;
  private answerButtonHide = false;
  private questionIndex: number;
  constructor(private as: AskService, private route: ActivatedRoute, private questionService: QuestionServiceService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.answerTextBoxFlag = false;
        this.answerButtonHide = false;
        this.questionIndex = params['id'];
        console.log(this.questionService.getQuestion(this.questionIndex));
        this.selectedQuestion = this.questionService.getQuestion(this.questionIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

// on clicking answer now the button has to hide and text area appears
  display() {

    this.answerTextBoxFlag = true;
    this.answerButtonHide = true;

  }
}

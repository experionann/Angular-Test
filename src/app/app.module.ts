import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { AskQuestionsComponent } from './ask-questions/ask-questions.component';
import { HeaderComponent } from './header.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionItemComponent } from './questions/question-list/question-item.component';
import { QuestionStartComponent } from './questions/question-start.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import {routing} from './app.routing';
import { QuestionAddComponent } from './ask-questions/question-add.component';
import { DropdownDirective } from './dropdown.directive'
import {QuestionServiceService} from './questions/question-service.service'
import{AskService} from './ask-questions/ask.service'

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    AskQuestionsComponent,
    HeaderComponent,
    QuestionListComponent,
    QuestionItemComponent,
    QuestionStartComponent,
    QuestionDetailComponent,
    QuestionAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuestionServiceService,AskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

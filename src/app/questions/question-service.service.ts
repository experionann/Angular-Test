import { Injectable } from '@angular/core';
import { Question } from './question'
import { Answers } from './answers'

@Injectable()
export class QuestionServiceService {

  private questions: Question[] = [
    new Question("Planets", "How many as of now?", [
      new Answers('There are 8 as of now..Pluto no longer considered as one'),
      new Answers('9 i guess')
    ]),
    new Question("veggies", "Do we live longer by this only?", [
      new Answers('Thats utter blunder.veggies make you healthy')
    ]),
    new Question("pizzas", "Do they digest fast?", [
      new Answers('They cannot digest fast because the base is made of maida.'),
      new Answers('They will digest fast if ur base is composed of kuboos!(Im bad at spellings,sorry!)')
    ]),
    new Question("Shawarma", "Will we die consuming this?", [
      new Answers('Got no idea! Im still living!')
    ]),
    new Question("Modi", "insane?", [])
  ];

  constructor() { }
  //Returns the questions array
  getQuestions() {
    return this.questions;
  }

  //Returns the id coming in the url
  getQuestion(id: number) {
    return this.questions[id];
  }

}

//Structure of Questions

import {Answers}  from './answers'
export class Question {
    constructor (public name:string,public description:string, public answers:Answers[]){}
}

import {Answers} from '../questions/answers'

export class AskService {
private items:Answers[]=[];
  constructor() { }

getItems(){
  return this.items;
}

addItems(items:Answers[]){
Array.prototype.push.apply(this.items,items);
}
}


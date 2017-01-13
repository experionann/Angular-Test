import { Routes, RouterModule } from '@angular/router'
import { QuestionsComponent } from './questions/questions.component'
import { AskQuestionsComponent } from './ask-questions/ask-questions.component'
import { QUEST_ROUTES } from './questions/question.routes'

const APP_ROUTES: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: QuestionsComponent,children: QUEST_ROUTES },
    { path: 'ask-questions', component: AskQuestionsComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
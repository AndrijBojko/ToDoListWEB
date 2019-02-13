import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { HttpModule } from '@angular/http';
import { HoverDirective } from './directives/hover.directive';
import { FormsModule } from '@angular/forms';
import {SearchPipe} from './pipes/search.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import {RouterModule} from '@angular/router';
import { TasksBoardComponent } from './components/tasks-board/tasks-board.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component'
import { EmailValidator } from './directives/email.validator.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UserService } from './services/user.service';
import { ConfigService } from './services/config.service';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'create', component: CreatePageComponent},
  {path: 'edit/:id', component: CreatePageComponent},
  { path: 'register', component: RegistrationFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'tasks', component: TasksBoardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    CreatePageComponent,
    TasksBoardComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    EmailValidator,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }

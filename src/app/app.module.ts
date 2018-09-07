import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HttpModule } from '@angular/http';
import { HoverDirective } from './hover.directive';
import { FormsModule } from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import {RouterModule} from '@angular/router'

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'create', component: CreatePageComponent},
  {path: 'edit/:id', component: CreatePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    CreatePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

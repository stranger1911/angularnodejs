import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddcourseComponent } from './course/addcourse/addcourse.component';
import { CourselistComponent } from './course/courselist/courselist.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddinterviewComponent } from './interview/addinterview/addinterview.component';
import { InterviewlistComponent } from './interview/interviewlist/interviewlist.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AddcourselistComponent } from './addcourselist/addcourselist.component';


@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    CourselistComponent,
    HeaderComponent,
    LoginComponent,
    AddinterviewComponent,
    InterviewlistComponent,
    UpdateDeleteComponent,
    AddcourselistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

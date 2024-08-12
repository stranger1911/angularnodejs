import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddcourseComponent } from './course/addcourse/addcourse.component';
import { CourselistComponent } from './course/courselist/courselist.component';
import { LoginComponent } from './login/login.component';
import { AddinterviewComponent } from './interview/addinterview/addinterview.component';
import { InterviewlistComponent } from './interview/interviewlist/interviewlist.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';
import { combineLatest } from 'rxjs';
import { AddcourselistComponent } from './addcourselist/addcourselist.component';

const routes: Routes = [
  {
    path:'', component:HeaderComponent
  },
  {
    path:'addcourses', component:AddcourseComponent
  },
  {
    path:'courseslist', component:CourselistComponent
  },
  {
    path:'addinterview', component:AddinterviewComponent
  },
  {
    path:'interviewlist', component:InterviewlistComponent
  },
  {
    path:'updatedelete/:id', component:UpdateDeleteComponent
  },
  {
  path:'addcourselist',component:AddcourselistComponent
  },
  {
    path:'login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

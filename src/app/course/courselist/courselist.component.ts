import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit{
courseListStatus:boolean=true;
constructor(private courseService:CourseService,private router:Router, private route:ActivatedRoute){}

ngOnInit(): void {
  this.getUrl();
}

getUrl(){
  if(this.router.url != '/updatedelete'){
    this.courseService.addCourseMethod(false);
  this.courseService.editCourseMethod(false);
  this.courseService.addCourseListMethod(false);
  this.courseService.editCourseListMethod(false);
  }
}

onAddCourseList(){
  this.courseService.addCourseListMethod(this.courseListStatus)
}

onEditCourseList(){
  this.courseService.editCourseListMethod(this.courseListStatus)
}
}

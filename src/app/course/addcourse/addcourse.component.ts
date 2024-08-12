import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  courseStatus:boolean=false;
  formData:any[]=[];

  constructor(private courseService:CourseService,private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getUrl();
    this.fetchData();
  }

  getUrl(){
  if(this.router.url != '/updatedelete'){
    this.courseService.addCourseMethod(false);
  this.courseService.editCourseMethod(false);
  this.courseService.addCourseListMethod(false);
  this.courseService.editCourseListMethod(false);
  }
}

  onAddCourse(){
    this.courseService.addCourseMethod(this.courseStatus=true);
  }

  onEditCourse(){
    this.courseService.editCourseMethod(this.courseStatus=true);
  }

  fetchData(){
    this.courseService.onFetchCourseGet().subscribe(result=>{
      this.formData =result
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourselist',
  templateUrl: './addcourselist.component.html',
  styleUrls: ['./addcourselist.component.css']
})
export class AddcourselistComponent implements OnInit {
  addCourse:boolean=false;
  addCourseList:boolean=false;
  constructor(private courseService:CourseService, private router:Router){}

  ngOnInit(): void {
    this.courseService.currentAddCourse.subscribe(result=>{
    this.addCourse = result
  })

  this.courseService.currentAddCourseList.subscribe(result=>{
    this.addCourseList = result;
  })
  }

  fileName: string | null = null;
selectedFile: File | null = null;

  triggerFileInput(): void {
    const fileInput = document.querySelector('.file-input') as HTMLElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      this.selectedFile= input.files[0]
    } else {
      this.fileName = 'No file chosen';
    }
  }

  onAddCourse(form:any){
    const formData = new FormData();
    formData.append('title',form.value.title);
    formData.append('description', form.value.description);
    if(this.selectedFile){
      formData.append('file',this.selectedFile);
    }

    this.courseService.onAddCoursePost(formData)
    form.reset();

    this.router.navigate(['/addcourses']);
  }

  onAddCourseList(form:any){
    
  }
}

import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {
  editCourse:boolean=false;
  editCourseList:boolean=false;
  singleCourseData:any;
  

constructor(private courseService:CourseService, private router:Router, private route:ActivatedRoute){}

ngOnInit(): void {
  
this.getCourseDataWithId()
  this.courseService.currentEditCourse.subscribe(result=>{
    this.editCourse = result
  })


this.courseService.currentEditCourseList.subscribe(result=>{
  this.editCourseList = result;
})
}


getCourseDataWithId(){
  const courseId = this.router.url.split('/')[2];
  this.courseService.onGetCourseWithId(courseId).subscribe(result=>{
   this.singleCourseData =result
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

  onSaveCourse(form:any){
    const formData = new FormData();
    formData.append('title',form.value.title);
    formData.append('description', form.value.description);
    if(this.selectedFile){
      formData.append('file',this.selectedFile);
    }
    const id = this.route.snapshot.paramMap.get('id');
    console.log(formData)

    this.courseService.onUpdateCourse(id,formData).subscribe(result=>{

    })
    form.reset();

    this.router.navigate(['/addcourses']);
  }

}

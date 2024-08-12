import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private addCourse = new BehaviorSubject<boolean>(false);
  currentAddCourse = this.addCourse.asObservable()

  addCourseMethod(status:boolean){
    this.addCourse.next(status)
  }

  private editCourse = new BehaviorSubject<boolean>(false);
  currentEditCourse = this.editCourse.asObservable();

  editCourseMethod(status:boolean){
    this.editCourse.next(status)
  }

  private addCourseList = new BehaviorSubject<boolean>(false);
  currentAddCourseList = this.addCourseList.asObservable();

  addCourseListMethod(status:boolean){
    this.addCourseList.next(status)
  }

  private editCourseList = new BehaviorSubject<boolean>(false);
  currentEditCourseList = this.editCourseList.asObservable();

  editCourseListMethod(status:boolean){
    this.editCourseList.next(status)
  }

  constructor(private http:HttpClient){}

  onAddCoursePost(formData:any){
    this.http.post('http://localhost:3000/api/upload',formData).subscribe(result=>{
      console.log(result);
    })
  }

  onFetchCourseGet():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/api/data');
  }

  onGetCourseWithId(id:string){
    return this.http.get(`http://localhost:3000/api/data/${id}`);
  }

  onUpdateCourse(id:string,formData:any){
    return this.http.put(`http://localhost:3000/api/data/${id}`,formData);
  }
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-interviewlist',
  templateUrl: './interviewlist.component.html',
  styleUrls: ['./interviewlist.component.css']
})
export class InterviewlistComponent {
  readonly panelOpenState = signal(false);
}

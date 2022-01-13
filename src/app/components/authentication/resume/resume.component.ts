import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  form_data: any;
  isResumeVisible: boolean = false;

  @Input()
  set data(data: any) {
    if (data) {
      this.form_data = data;
      this.isResumeVisible = true;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

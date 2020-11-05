import { Component, OnInit } from '@angular/core';
import CourseServiceClient from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table-component.component.html',
  styleUrls: ['./course-table-component.component.css']
})

export class CourseTableComponentComponent implements OnInit {

  private courseService: CourseServiceClient;
  courses: Array<any>;

  constructor() {
    this.courseService = new CourseServiceClient();
  }

  ngOnInit(): void {
    this.courseService.findAllCourses(resp => this.courses = resp.data);
  }
}

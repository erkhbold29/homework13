import { Component } from '@angular/core';
import { DbService } from '../service/db.service';
import { Student } from '../students/student';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-student-detail',
  template: `
   <h1>
	Student Detail
   </h1>
    <p>
        ID: {{student.id}}, student name: {{student.name}}, student email: {{student.email}}
    </p>
  `
})

export class StudentDetailComponent {
  // Read Route parameters from ActivateRoute
  // We will use Observable as wrapper to subscribe to param changes
  private subscription: Subscription;
  id: number;
  student: Student;

  constructor(private activatedRoute: ActivatedRoute, private dbService : DbService) {
    // params will return an Observable
    // we need it so we track changes in parameters as this code will be run once at constructor
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
	
	this.student = JSON.parse(this.dbService.findById(this.id));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Component} from '@angular/core';
import { Student } from './student';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-students',
  template: `<table>
    <tr>
		<th>
			Student Names
		</th>
	</tr>
	<tr *ngFor="let student of students">
		<td>
		<a href="/profile/{{student.id}}">{{student.name}}</a>
		</td>
	</tr>
</table>`
})
export class StudentsComponent {
	
  students: Student[] = [];
  
  constructor(private dbService : DbService) {
	  this.students = JSON.parse(this.dbService.getData());
  }
  
}

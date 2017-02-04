import { Injectable } from '@angular/core';
import { Student } from '../students/student';

@Injectable()
export class DbService {

  private students: Student[] = [
      { id: 1, name: 'Aurelia Menendez', email: 'menendez@mum.edu' },
      { id: 2, name: 'Corliss Zuk', email: 'zuk@mum.edu' },
      { id: 3, name: 'Bao Ziglar', email: 'bao@mum.edu' },
      { id: 4, name: 'Zachary Langlais', email: 'langlais@mum.edu' },
	  { id: 5, name: 'Tressa Schwing', email: 'tressa@mum.edu' }
    ];

  constructor() { }

  public getData() {
    return JSON.stringify(this.students);
  }
  
  public findById(paramId: number){
	  for (var i = 0; i < this.students.length; i++) {
        if (this.students[i].id == paramId) {
            return(JSON.stringify(this.students[i]));
        }
    }
  }
  
}

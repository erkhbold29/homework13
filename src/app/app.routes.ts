import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './studentDetail/student-detail.component';
import { NotFoundComponent } from './pageNotFound/not-found.component';

import { MyCanActivateGuard } from "./guard/mycanactivate.guard";

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'students', component: StudentsComponent },
	 { path: 'profile/:id', component: StudentDetailComponent, canActivate: [MyCanActivateGuard] },
	 { path: '404', component: NotFoundComponent },
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);

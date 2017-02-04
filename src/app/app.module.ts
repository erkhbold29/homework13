import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import our Routes file
import { myRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { RouteComponent } from './param/route.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { DbService } from './service/db.service';
import { StudentDetailComponent } from './studentDetail/student-detail.component';
import { NotFoundComponent } from './pageNotFound/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    HomeComponent,
    StudentsComponent,
    StudentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	myRoutes // add it to imports
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

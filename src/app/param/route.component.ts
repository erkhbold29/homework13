import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {
  // Read Route parameters from ActivateRoute
  // We will use Observable as wrapper to subscribe to param changes
  private subscription: Subscription;
  id: string;
  onetimeId: string;

  constructor(private activatedRoute: ActivatedRoute) {
    // params will return an Observable
    // we need it so we track changes in parameters as this code will be run once at constructor
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
    // constructor will be used once
    this.onetimeId = activatedRoute.snapshot.params['id']
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

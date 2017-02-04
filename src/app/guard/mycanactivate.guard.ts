import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class MyCanActivateGuard implements CanActivate {

	constructor(private router: Router) {}

	canActivate() {
		if (/*check id is valid*/) {
	//		this.router.navigate(['/profil']);
			return true;
		}else {
			this.router.navigate(['/404']);
		}
		return false;
	}
}


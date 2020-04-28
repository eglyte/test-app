import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public redirectUrl: string;
    public isLoggedIn = false;

    constructor(public router: Router) {
    }

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        );
    }

    logout(): void {
        this.isLoggedIn = false;
        this.router.navigate([ '/login' ]);
    }
}

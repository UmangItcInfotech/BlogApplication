import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated: boolean = false;

  toggleAuthentication(): void {
    this.isAuthenticated = !this.isAuthenticated;
  }

  public isAuthenticate(): boolean {
    return this.isAuthenticated;
  }
}

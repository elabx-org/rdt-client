import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthResolverService  {
  constructor(private authService: AuthService) {}

  resolve() {
    return this.authService.isLoggedIn();
  }
}

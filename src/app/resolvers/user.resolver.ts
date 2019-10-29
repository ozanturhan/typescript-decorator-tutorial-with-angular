import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from '../services';
import {UserModel} from '../models';

@Injectable()
export class UserResolver implements Resolve<UserModel> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    console.log(route.params);
    return this.userService.getUser(route.params.id);
  }

}

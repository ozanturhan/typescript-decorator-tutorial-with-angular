import {RestClient} from './rest-client';
import {Observable} from 'rxjs';
import {UserModel} from '../models';
import {Client, UrlParam, Request, HttpMethod} from '../decorators';

@Client('https://jsonplaceholder.typicode.com/')
export class UserService extends RestClient {

  @Request('users', HttpMethod.GET)
  getUsers(): Observable<Array<UserModel>> { return null; }

  @Request('users/:id', HttpMethod.GET)
  getUser(@UrlParam('id') id: number): Observable<UserModel> { return null; }
}

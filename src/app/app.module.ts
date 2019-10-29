import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './services';
import {UserListResolver, UserResolver} from './resolvers';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: UserListComponent, resolve: { userList: UserListResolver}},
      {path: 'user/:id', component: UserComponent, resolve: { user: UserResolver }}
    ])
  ],
  providers: [
    UserService,
    UserListResolver,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

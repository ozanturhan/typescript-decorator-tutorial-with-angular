import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../models';

@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.users = this.activatedRoute.snapshot.data.userList;
  }

}

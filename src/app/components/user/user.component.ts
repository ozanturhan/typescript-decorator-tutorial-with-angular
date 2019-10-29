import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  user: UserModel;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.user;
  }

}

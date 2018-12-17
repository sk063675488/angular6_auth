import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/service/get-user.service';
import {FilterPipe} from '../../pipe/filter.pipe'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:object;
  constructor(private user:GetUserService) { }

  ngOnInit() {
   this.user.getUser().subscribe(data => this.users = data)
  }
}

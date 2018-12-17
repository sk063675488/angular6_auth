import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  constructor(private _authSer: AuthGuardService) { }

  ngOnInit() {
  }

}

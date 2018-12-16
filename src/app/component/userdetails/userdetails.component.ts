import { Component, OnInit,OnDestroy } from '@angular/core';
import {GetUserService} from '../../service/get-user.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit,OnDestroy {
  details:object;
  $id:number;
  constructor(private _getUser:GetUserService, private route:ActivatedRoute) {
    this.route.params.subscribe(data => this.$id = data.id)
   }

  ngOnInit() {
    this._getUser.getUserDetails(this.$id).subscribe(data => this.details = data)
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    
  }

}

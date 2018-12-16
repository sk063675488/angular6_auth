import { Component, OnInit } from '@angular/core';
import { ChangTextDirective} from '../../directive/chang-text.directive'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ChangTextDirective]
})
export class HomeComponent implements OnInit {

  constructor(private chntxt:ChangTextDirective) { }

  ngOnInit() {
  }

}

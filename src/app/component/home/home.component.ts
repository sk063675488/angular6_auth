import { Component, OnInit } from '@angular/core';
import { ChangTextDirective} from '../../directive/chang-text.directive';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ChangTextDirective]
})
export class HomeComponent implements OnInit {

  constructor(private chntxt:ChangTextDirective, private slider:NgbCarouselConfig) { 
    slider.interval = 2000;
    slider.wrap = true;
    slider.keyboard = false;
    slider.pauseOnHover = false;
  }

  ngOnInit() {

  }

}

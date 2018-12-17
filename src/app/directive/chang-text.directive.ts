import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangText]'
})
export class ChangTextDirective implements OnInit {

  @Input() Title : string;
  @Input() desc_ : string;
  constructor(private elRef:ElementRef) { }
  
  ngOnInit(){
    this.elRef.nativeElement.Style.width = "100%"
  }
}

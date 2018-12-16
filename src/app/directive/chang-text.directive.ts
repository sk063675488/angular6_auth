import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangText]'
})
export class ChangTextDirective implements OnInit {

  @Input() Title : string;
  @Input() desc_ : string;
  constructor(private elRef:ElementRef) { }
  
  ngOnInit(){
    this.elRef.nativeElement.innerText = this.Title;
  }
  @HostListener('mouseenter') onmouseenter():void{
    this.elRef.nativeElement.innerText = "sandeep kumar changed"
  }
}

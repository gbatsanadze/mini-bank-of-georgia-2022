import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';


@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {
  @HostBinding('class.active') isOpen = false;
  @HostListener('document:click', ['$event']) openClass($event){
    console.log(this.elementRef.nativeElement);
    this.isOpen = this.elementRef.nativeElement.contains($event.target) ? !this.isOpen : false;
  }

  constructor(private elementRef: ElementRef) { }

}



//
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   // tslint:disable-next-line:component-selector
//   selector: 'bg-shell-header',
//   templateUrl: './shell-header.component.html',
//   styleUrls: ['./shell-header.component.scss']
// })
// export class ShellHeaderComponent implements OnInit {
//   constructor() { }
//   userClick = false;
//
//   ngOnInit(): void {
//   }
//   onClick() {
//     this.userClick = !this.userClick;
//     console.log(this.userClick);
//   }
// }

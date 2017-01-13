import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  private isOpen = false;
  
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  //To open user onclick
  @HostListener('click') open() {
    this.isOpen = true;
  }

  //To close when mouse leaves
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }


}


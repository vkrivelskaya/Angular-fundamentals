import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
  exportAs: 'togglePassword'
})
export class TogglePasswordDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  changeInputType(): void {
    this.elementRef.nativeElement.getAttribute('type') === 'password'
      ? this.elementRef.nativeElement.setAttribute('type', 'text')
      : this.elementRef.nativeElement.setAttribute('type', 'password');
  }
}

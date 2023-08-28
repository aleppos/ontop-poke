import { Directive, HostBinding } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[click]',
})
export class ClickDirective {
  @HostBinding('style.cursor') cursor = 'pointer';
}

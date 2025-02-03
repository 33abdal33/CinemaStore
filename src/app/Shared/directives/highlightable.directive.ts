import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlightable]',
  standalone: true
})
export class HighlightableDirective {

  constructor() { }

}

import { Component, Input } from '@angular/core';

// OnInit: Is a Life cycle Hook of the component
// Decorator
@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {
      @Input() value: 'O' | 'X'
}

import { Component, Input } from '@angular/core';

export type Spacing = '1' | '2' | '3' | '4';

@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss'],
})
export class SpacerComponent {
  @Input() vertical?: Spacing;
  @Input() horizontal?: Spacing;
}

import { Component, Input } from '@angular/core';
import { Spacing } from '../spacer/spacer.component';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  @Input() spacing: Spacing | null = null;
}

import { Component, Input, OnInit } from '@angular/core';
import { v4 } from 'uuid';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() color?: 'default' | 'white';
  @Input() size: 'large' | 'medium' | 'small' = 'medium';

  randomId = v4();

  color1 = '';
  color2 = '';
  color3 = '';

  ngOnInit() {
    if (this.color === 'white') {
      this.color1 = '#ffffff';
      this.color2 = '#000000';
      this.color3 = '#ffffff';
    } else {
      this.color1 = '#ff5a70';
      this.color2 = '#ba3d50';
      this.color3 = '#e95b71';
    }
  }
}

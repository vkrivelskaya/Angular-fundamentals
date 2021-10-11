import { Component, Input } from '@angular/core';

import { ButtonsEnum } from '../../enums/buttons.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText!: ButtonsEnum;
  @Input() buttonIcon: any;

  constructor() {}
}

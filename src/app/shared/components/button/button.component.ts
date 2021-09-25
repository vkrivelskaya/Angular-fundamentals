import { Component, Input, OnInit } from '@angular/core';

import { ButtonsEnum } from '../../enums/buttons.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText!: ButtonsEnum;
  @Input() buttonIcon: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.buttonText);
  }
}

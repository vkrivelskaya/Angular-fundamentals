import { Component, OnInit } from '@angular/core';

import { ButtonsEnum } from '../../enums/buttons.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonText = ButtonsEnum.logOut;

  constructor() {}

  ngOnInit(): void {}
}

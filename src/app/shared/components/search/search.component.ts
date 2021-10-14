import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonsEnum } from '../../enums/buttons.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchInputPlaceholder!: string;
  @Output() search = new EventEmitter<string>();

  searchButtonText = ButtonsEnum.search;
  searchCourse!: string;

  constructor() {}

  onSearchButtonClick(value: string) {
    this.search.emit(value);
  }
}

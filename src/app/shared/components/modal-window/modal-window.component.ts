import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ButtonsEnum } from '../../enums/buttons.enum';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input() okButtonText!: ButtonsEnum;
  @Input() cancelButtonText!: ButtonsEnum;
  @Input() modalTitle!: string;
  @Input() modalMessage!: string;
  @Output() clickModalButton = new EventEmitter();

  closeIcon = faTimes;

  constructor() {}

  onButtonClick(value: any): void {
    this.clickModalButton.emit(value);
  }
}

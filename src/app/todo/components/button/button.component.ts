import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
  @Input() disabled: boolean = false;
  @Input() type: string = "button";
  @Output() btnClick = new EventEmitter();

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select-status',
  templateUrl: './select-status.component.html',
  styleUrls: ['./select-status.component.scss'],
})
export class SelectStatusComponent {
  @Input() statuses!: string[];
  @Input() selectTitle!: string;
  @Output() selectedValue = new EventEmitter<string>();

  constructor() {}

  setSelectValue(event: MatSelectChange) {
    this.selectedValue.emit(event.value);
  }
}

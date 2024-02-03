import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-management-header',
  templateUrl: './management-header.component.html',
  styleUrls: ['./management-header.component.scss']
})
export class ManagementHeaderComponent {
  @Output() childOutput: EventEmitter<boolean> = new EventEmitter();
toggle:boolean = true
  sendOutput() {
    this.toggle = !this.toggle
    this.childOutput.emit(this.toggle);
  }
}

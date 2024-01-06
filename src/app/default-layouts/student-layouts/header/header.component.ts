import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() childOutput: EventEmitter<boolean> = new EventEmitter();
toggle:boolean = true
  sendOutput() {
    this.toggle = !this.toggle
    this.childOutput.emit(this.toggle);
  }
}

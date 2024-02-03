import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.scss']
})
export class TeacherHeaderComponent {
  @Output() childOutput: EventEmitter<boolean> = new EventEmitter();
toggle:boolean = true
  sendOutput() {
    this.toggle = !this.toggle
    this.childOutput.emit(this.toggle);
  }
}

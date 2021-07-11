import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  title = 'example-angular-app';
  @Input() public inputData;
  @Output() public outputData: EventEmitter<string> = new EventEmitter<string>();
}

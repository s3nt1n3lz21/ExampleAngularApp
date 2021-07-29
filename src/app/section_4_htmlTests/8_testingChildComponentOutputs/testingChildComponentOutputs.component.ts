import { Component } from '@angular/core';

@Component({
  selector: 'app-testingChildComponentOutputs',
  templateUrl: './testingChildComponentOutputs.component.html',
  styleUrls: ['./testingChildComponentOutputs.component.scss']
})
export class TestingChildComponentOutputsComponent {
  title = 'example-angular-app';
  public updateData(val) {};
}

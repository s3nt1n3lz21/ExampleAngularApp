import { Component } from '@angular/core';

@Component({
  selector: 'app-testingFieldsAreUpdated',
  templateUrl: './testingFieldsAreUpdated.component.html',
  styleUrls: ['./testingFieldsAreUpdated.component.scss']
})
export class TestingFieldsAreUpdatedComponent {
  title = 'example-angular-app';
  
  count = 0;

  public updateCount(value) {
    this.count = value;
  }
}

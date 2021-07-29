import { Component } from '@angular/core';

@Component({
  selector: 'app-testingGettersAndSetters',
  templateUrl: './testingGettersAndSetters.component.html',
  styleUrls: ['./testingGettersAndSetters.component.scss']
})
export class TestingGettersAndSettersComponent {
  title = 'example-angular-app';
  data = 5;

  public get getData() {
    return this.data;
  }

  public set setData(value) {
    this.data = value;
  }
}

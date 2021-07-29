import { Component } from '@angular/core';

@Component({
  selector: 'app-testingFunctionResults',
  templateUrl: './testingFunctionResults.component.html',
  styleUrls: ['./testingFunctionResults.component.scss']
})
export class TestingFunctionResultsComponent {
  title = 'example-angular-app';

  public double(value) {
    return value*2;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-testingNgClass',
  templateUrl: './testingNgClass.component.html',
  styleUrls: ['./testingNgClass.component.scss']
})
export class TestingNgClassComponent {
  title = 'example-angular-app';

  public activeTitle = false;

  public activeTitleFunction() { return true; }
}

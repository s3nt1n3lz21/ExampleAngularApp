import { Component } from '@angular/core';

@Component({
  selector: 'app-testingNgIfs',
  templateUrl: './testingNgIfs.component.html',
  styleUrls: ['./testingNgIfs.component.scss']
})
export class TestingNgIfsComponent {
  title = 'example-angular-app';
  showTitle;

  public showTitleFunction() {
    return true;
  }
}

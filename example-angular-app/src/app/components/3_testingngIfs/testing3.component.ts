import { Component } from '@angular/core';

@Component({
  selector: 'app-testing3',
  templateUrl: './testing3.component.html',
  styleUrls: ['./testing3.component.scss']
})
export class Testing3Component {
  title = 'example-angular-app';
  showTitle;

  public showTitleFunction() {
    return true;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-testing5',
  templateUrl: './testing5.component.html',
  styleUrls: ['./testing5.component.scss']
})
export class Testing5Component {
  title = 'example-angular-app';

  public activeTitle = false;

  public activeTitleFunction() { return true; }
}

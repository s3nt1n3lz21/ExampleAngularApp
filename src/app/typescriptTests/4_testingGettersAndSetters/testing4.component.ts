import { Component } from '@angular/core';

@Component({
  selector: 'app-testing4',
  templateUrl: './testing4.component.html',
  styleUrls: ['./testing4.component.scss']
})
export class Testing4Component {
  title = 'example-angular-app';
  data = 5;

  public get getData() {
    return this.data;
  }

  public set setData(value) {
    this.data = value;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.scss']
})
export class Testing1Component {
  title = 'example-angular-app';
  public functionToBeCalled() {}
  
  public loadData() {
    this.functionToBeCalled();
  }
}

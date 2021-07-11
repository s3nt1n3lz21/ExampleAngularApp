import { Component } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-testing15',
  templateUrl: './testing15.component.html',
  styleUrls: ['./testing15.component.scss']
})
export class Testing15Component {
  
  public data = List([]);
  
  public setData(value) {
    this.data = value;
  }
}

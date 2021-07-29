import { Component } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-testingImuttablejsData',
  templateUrl: './testingImuttablejsData.component.html',
  styleUrls: ['./testingImuttablejsData.component.scss']
})
export class TestingImuttablejsDataComponent {
  
  public data = List([]);
  
  public setData(value) {
    this.data = value;
  }
}

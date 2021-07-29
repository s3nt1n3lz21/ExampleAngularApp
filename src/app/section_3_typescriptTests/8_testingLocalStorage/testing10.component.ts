import { Component } from '@angular/core';

@Component({
  selector: 'app-testing10',
  templateUrl: './testing10.component.html',
  styleUrls: ['./testing10.component.scss']
})
export class Testing10Component {
  
  public setData() {
    localStorage.setItem('data', 'value');
  };

  public loadData() {
    return localStorage.getItem('data');
  }
}

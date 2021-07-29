import { Component } from '@angular/core';

@Component({
  selector: 'app-testingLocalStorage',
  templateUrl: './testingLocalStorage.component.html',
  styleUrls: ['./testingLocalStorage.component.scss']
})
export class TestingLocalStorageComponent {
  
  public setData() {
    localStorage.setItem('data', 'value');
  };

  public loadData() {
    return localStorage.getItem('data');
  }
}

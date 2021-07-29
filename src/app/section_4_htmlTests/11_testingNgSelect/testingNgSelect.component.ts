import { Component } from '@angular/core';

@Component({
  selector: 'app-testingNgSelect',
  templateUrl: './testingNgSelect.component.html',
  styleUrls: ['./testingNgSelect.component.scss']
})
export class TestingNgSelectComponent {
  title = 'example-angular-app';
  options = [];
  option = "";
  
  public selectOption(val) {}
}

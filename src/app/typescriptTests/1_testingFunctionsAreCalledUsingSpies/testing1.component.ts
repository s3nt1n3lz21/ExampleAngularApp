import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.scss']
})
export class Testing1Component {
  title = 'example-angular-app';

  constructor(
    private apiService: ApiService
  ) {}

  public doSomething() {}
  
  public loadData() {
    this.doSomething();
  }

  public dontLoadData() {}

  public callPrivateFunction() {
    this.privateFunction();
  }

  private privateFunction() {
    this.insidePrivateFunction();
  };

  public insidePrivateFunction() {}

  public serviceFunctionCalled() {
    this.apiService.getData();
  }
}

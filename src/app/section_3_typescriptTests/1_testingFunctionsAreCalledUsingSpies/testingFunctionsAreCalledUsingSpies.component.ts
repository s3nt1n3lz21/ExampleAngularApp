import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-testingFunctionsAreCalledUsingSpies',
  templateUrl: './testingFunctionsAreCalledUsingSpies.component.html',
  styleUrls: ['./testingFunctionsAreCalledUsingSpies.component.scss']
})
export class TestingFunctionsAreCalledUsingSpiesComponent {
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

  public tryLoadData() {
    if (this.shouldLoadData()) {
      this.loadData();
    } else {
      this.dontLoadData();
    }
  }

  public shouldLoadData() { return true }
}

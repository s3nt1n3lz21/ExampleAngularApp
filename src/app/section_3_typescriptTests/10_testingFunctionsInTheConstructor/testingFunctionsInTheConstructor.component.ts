import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-testingFunctionsInTheConstructor',
  templateUrl: './testingFunctionsInTheConstructor.component.html',
  styleUrls: ['./testingFunctionsInTheConstructor.component.scss']
})
export class TestingFunctionsInTheConstructorComponent {
  
  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getData();
  }
}

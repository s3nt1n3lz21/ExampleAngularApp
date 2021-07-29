import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-testingSubscriptionsAndObservables',
  templateUrl: './testingSubscriptionsAndObservables.component.html',
  styleUrls: ['./testingSubscriptionsAndObservables.component.scss']
})
export class TestingSubscriptionsAndObservablesComponent {
  title = 'example-angular-app';

  data = 1;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getData().subscribe(result => {
      this.handleData(result);
      this.data = result;
    })
  }

  public handleData(value) {}
}

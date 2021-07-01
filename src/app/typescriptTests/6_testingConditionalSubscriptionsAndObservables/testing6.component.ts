import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-testing6',
  templateUrl: './testing6.component.html',
  styleUrls: ['./testing6.component.scss']
})
export class Testing6Component {
  title = 'example-angular-app';

  constructor(
    private apiService: ApiService
  ) {}
  
  public getData(getData: boolean) {
    let action: Observable<number>;

    if (getData) {
      action = this.apiService.getData();
    } else {
      action = this.apiService.getOtherData();
    }

    action.subscribe((data) => {
      this.handleData(data);
    });
  }

  public handleData(value) {};
}

import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-testing5',
  templateUrl: './testing5.component.html',
  styleUrls: ['./testing5.component.scss']
})
export class Testing5Component {
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

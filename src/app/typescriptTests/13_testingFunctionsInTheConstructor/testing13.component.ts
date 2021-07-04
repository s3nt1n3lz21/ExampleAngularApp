import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-testing13',
  templateUrl: './testing13.component.html',
  styleUrls: ['./testing13.component.scss']
})
export class Testing13Component {
  
  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getData();
  }
}

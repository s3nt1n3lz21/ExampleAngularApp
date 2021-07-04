import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-testing14',
  templateUrl: './testing14.component.html',
  styleUrls: ['./testing14.component.scss']
})
export class Testing14Component {
  
  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
    this.changeDetector.detach();
  }
}

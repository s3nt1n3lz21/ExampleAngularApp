import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-testing12',
  templateUrl: './testing12.component.html',
  styleUrls: ['./testing12.component.scss']
})
export class Testing12Component {
  
  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    // Update the UI
    this.changeDetector.detectChanges(); 
  }
}

import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-testingTheChangeDetector',
  templateUrl: './testingTheChangeDetector.component.html',
  styleUrls: ['./testingTheChangeDetector.component.scss']
})
export class TestingTheChangeDetectorComponent {
  
  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    // Update the UI
    this.changeDetector.detectChanges(); 
  }
}

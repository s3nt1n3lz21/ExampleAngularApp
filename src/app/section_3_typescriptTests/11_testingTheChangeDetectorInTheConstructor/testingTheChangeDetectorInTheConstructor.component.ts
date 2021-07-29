import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-testingTheChangeDetectorInTheConstructor',
  templateUrl: './testingTheChangeDetectorInTheConstructor.component.html',
  styleUrls: ['./testingTheChangeDetectorInTheConstructor.component.scss']
})
export class TestingTheChangeDetectorInTheConstructorComponent {
  
  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
    this.changeDetector.detach();
  }
}

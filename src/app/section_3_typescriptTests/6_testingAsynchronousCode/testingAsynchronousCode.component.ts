import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-testingAsynchronousCode',
  templateUrl: './testingAsynchronousCode.component.html',
  styleUrls: ['./testingAsynchronousCode.component.scss']
})
export class TestingAsynchronousCodeComponent {
  private searchSubject = new BehaviorSubject<string>('');

  public getSearchValue() {
    return this.searchSubject.asObservable();
  }

  public getFirstPage() {}

  public waitAndGetFirstPage() {
    setTimeout(() => {
      this.getFirstPage();
    }, 300);
  }

  public waitForInputToStopChanging() {
    this.getSearchValue().pipe(debounceTime(500)).subscribe(() => {
      this.getFirstPage();
    });
  }
}

import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-testing7',
  templateUrl: './testing7.component.html',
  styleUrls: ['./testing7.component.scss']
})
export class Testing7Component {
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

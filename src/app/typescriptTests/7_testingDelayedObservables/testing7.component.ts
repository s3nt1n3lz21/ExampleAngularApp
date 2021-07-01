import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-testing7',
  templateUrl: './testing7.component.html',
  styleUrls: ['./testing7.component.scss']
})
export class Testing7Component {
  title = '';
  private searchSubject = new BehaviorSubject<string>('');

  constructor() {
    this.getUserSearch().pipe(debounceTime(500)).subscribe(() => {
      this.getFirstPage();
    });
  }

  public getUserSearch() {
    return this.searchSubject.asObservable();
  }

  public getFirstPage() {}

  public waitAndGetFirstPage() {
    setTimeout(() => {
      this.getFirstPage();
    }, 300);
  }
}

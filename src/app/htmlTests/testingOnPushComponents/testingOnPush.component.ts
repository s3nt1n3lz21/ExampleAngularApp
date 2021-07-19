import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingOnPushComponent {
  title = 'example-angular-app';
}

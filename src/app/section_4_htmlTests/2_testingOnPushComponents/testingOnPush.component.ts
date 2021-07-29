import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testingOnPush',
  templateUrl: './testingOnPush.component.html',
  styleUrls: ['./testingOnPush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingOnPushComponent {
  title = 'example-angular-app';
}

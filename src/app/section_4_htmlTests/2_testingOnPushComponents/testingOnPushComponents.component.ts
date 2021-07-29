import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testingOnPushComponents',
  templateUrl: './testingOnPushComponents.component.html',
  styleUrls: ['./testingOnPushComponents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingOnPushComponentsComponent {
  title = 'example-angular-app';
}

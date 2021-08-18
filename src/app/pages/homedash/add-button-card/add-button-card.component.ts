import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'ngx-add-button-card',
  templateUrl: './add-button-card.component.html',
  styleUrls: ['./add-button-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddButtonCardComponent {

  constructor() { }
}
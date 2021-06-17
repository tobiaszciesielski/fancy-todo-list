import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-summary',
  styleUrls: ['./summary.component.scss'],
  template: `
    <div class="summary">
      <h3 class="summary__item">Done: {{ calcDone() }}</h3>
      <h3 class="summary__item">Tasks: {{ items?.length }}</h3>
    </div>
  `,
})
export class SummaryComponent implements OnInit {
  @Input() items?: Task[];

  constructor() {}
  ngOnInit() {}

  calcDone() {
    return this.items?.filter((task) => task.isDone).length;
  }
}

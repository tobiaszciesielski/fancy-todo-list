import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() index!: number;
  editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  handleNameChange(event: any) {
    this.task.name = event.target.value;
    this.toggleEdit();
  }
}

import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
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
  @Output() remove = new EventEmitter<Task>();
  @Output() rename = new EventEmitter<{ task: Task; name: string }>();
  @Output() toggleStatus = new EventEmitter<Task>();
  @ViewChild('inputField') inputField!: ElementRef;
  editMode: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onRename(event: any) {
    const name = event.target.value;
    this.rename.emit({ task: this.task, name });
    this.toggleEdit();
  }

  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode === true) {
      this.cd.detectChanges();
      this.inputField.nativeElement.focus();
    }
  }

  onStatusChange() {
    this.toggleStatus.emit(this.task);
  }

  onRemove() {
    this.remove.emit(this.task);
  }
}

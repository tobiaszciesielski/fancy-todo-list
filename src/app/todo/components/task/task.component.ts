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
  @Output() remove = new EventEmitter<{ id: number }>();
  @Output() rename = new EventEmitter<{ id: number; name: string }>();
  @Output() toggleStatus = new EventEmitter<{ id: number }>();
  @ViewChild('inputField') inputField!: ElementRef;
  editMode: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onRename(event: any) {
    const name = event.target.value;
    this.rename.emit({ id: this.task.id, name });
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
    this.toggleStatus.emit({ id: this.task.id });
  }

  onRemove() {
    this.remove.emit({ id: this.task.id });
  }
}

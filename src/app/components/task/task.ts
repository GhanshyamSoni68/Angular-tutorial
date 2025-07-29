import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrls: ['./task.scss']
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  onDelete() { this.delete.emit(this.task.id); }
  onToggle() { this.toggle.emit(this.task.id); }
}

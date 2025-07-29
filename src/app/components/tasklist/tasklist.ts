import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { TaskComponent } from '../task/task';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskComponent],
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.scss']
})
export class TasklistComponent {
  tasks: Task[] = [
    { id: 1, title: 'Buy milk', done: false },
    { id: 2, title: 'Finish assignment', done: true },
    { id: 3, title: 'Walk the dog', done: false },
  ];

  newTitle = '';

  addTask() {
    const title = this.newTitle.trim();
    if (!title) return;
    const nextId = (this.tasks.at(-1)?.id ?? 0) + 1;
    this.tasks = [...this.tasks, { id: nextId, title, done: false }];
    this.newTitle = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleDone(id: number) {
    this.tasks = this.tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
  }
}

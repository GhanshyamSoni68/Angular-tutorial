import { Routes } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasklistComponent },
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="container">
      <router-outlet />
    </main>
    <app-footer></app-footer>
  `,
  styles: [`.container{max-width:900px;margin:2rem auto;padding:0 1rem;}`]
})
export class App {}

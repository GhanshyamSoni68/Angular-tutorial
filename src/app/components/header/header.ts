import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="header">
      <nav>
        <a routerLink="/tasks" routerLinkActive="active">Tasks</a>
      </nav>
    </header>
  `,
  styles: [`
    .header{display:flex;align-items:center;gap:1rem;padding:1rem;border-bottom:1px solid #eee;background: blanchedalmond;}
    nav a{margin-right:1rem;text-decoration:none}
    .active{font-weight:600}
  `]
})
export class HeaderComponent {}

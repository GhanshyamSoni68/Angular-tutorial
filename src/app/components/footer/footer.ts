import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <small>&copy; {{year}} Task App</small>
    </footer>
  `,
  styles: [`.footer{margin-top:2rem;padding:1rem;border-top:1px solid #eee;text-align:center;color:#666}`]
})
export class FooterComponent {
  year = new Date().getFullYear();
}

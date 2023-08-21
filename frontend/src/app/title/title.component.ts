import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div class="title">{{ title }}</div>

  `,
  styles: [`
    .title {
      font-size: 48px;
      font-weight: bold;
    }

  `],
})
export class TitleComponent {
  title = 'Tic Tac Toe - Impossible!';
}


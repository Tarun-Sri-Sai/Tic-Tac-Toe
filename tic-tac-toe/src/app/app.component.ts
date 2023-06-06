import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-title></app-title>
      <app-board></app-board>
      <app-player *ngIf="!this.gameService.isOver"></app-player>
      <app-result *ngIf="this.gameService.isOver"></app-result>
      </div>
  `,
  styles: [`
    .container {
      text-align: center;
      font-family: sans-serif;
    }
  `]
})
export class AppComponent {
  constructor(public gameService: GameService) { }
}

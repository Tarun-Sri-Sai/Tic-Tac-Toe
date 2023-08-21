import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  template: `
    <div class="board">
      <div class="row">
        <app-cell row="0" col="0"></app-cell>
        <app-cell row="0" col="1"></app-cell>
        <app-cell row="0" col="2"></app-cell>
      </div>
      <div class="row">
        <app-cell row="1" col="0"></app-cell>
        <app-cell row="1" col="1"></app-cell>
        <app-cell row="1" col="2"></app-cell>
      </div>
      <div class="row">
        <app-cell row="2" col="0"></app-cell>
        <app-cell row="2" col="1"></app-cell>
        <app-cell row="2" col="2"></app-cell>
      </div>
    </div>

  `,
  styles: [`

  `],
})
export class BoardComponent {
  constructor(public gameService: GameService) {}
}


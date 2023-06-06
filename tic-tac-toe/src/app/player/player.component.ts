import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player',
  template: `
    <div class="symbol">Your symbol is {{ this.gameService.PLAYER }}</div>
    <div class="turn">{{ this.gameService.isPlayerTurn == true ?
                         'It is now your turn. Make a move.' :
                         'Computer is thinking of a move...'}}</div>
  `,
  styles: [`
    div {
      font-size: 24px;
      border: 1px solid orange;
      width: fit-content;
      margin: 20px auto;
      padding: 10px;
      border-radius: 5px;
      background-color: #FFF0E0;
    }
  `]
})
export class PlayerComponent {
  constructor(public gameService: GameService) { }
}

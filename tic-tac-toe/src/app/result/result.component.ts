import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-result',
  template: `
    <div class="result">{{ this.gameService.result != this.gameService.EMPTY ?
                           this.gameService.result + " has won!" :
                           "Game has tied." }}</div>
  `,
  styles: [`
    div {
      font-size: 24px;
      border: 1px solid blue;
      width: fit-content;
      margin: 20px auto;
      padding: 10px;
      border-radius: 5px;
      background-color: #E0F0FF;
    }
  `]
})
export class ResultComponent {
  constructor(public gameService: GameService) { }
}

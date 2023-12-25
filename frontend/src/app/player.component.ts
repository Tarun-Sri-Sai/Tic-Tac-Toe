import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-player',
  template: `
    <div class="symbol highlight-box-silver">
      Your symbol is {{ this.gameService.PLAYER }}
    </div>
    <div class="turn highlight-box-yellow">
      {{
        this.gameService.isPlayerTurn == true
          ? "It is now your turn. Make a move."
          : "Computer is thinking of a move..."
      }}
    </div>

  `,
  styles: [`
    div {
      font-size: 24px;
      border: 1px solid orange;
      width: fit-content;
      margin: 20px auto;
      padding: 10px;
      border-radius: 5px;
      background-color: #fff0e0;
    }

    .highlight-box-silver {
      background-color: silver;
      color: #333333;
      border: 1px solid #cccccc;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
    }

    .highlight-box-silver:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    .highlight-box-yellow {
      background-color: yellow;
      color: #333333;
      border: 1px solid #cccc00;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
    }

    .highlight-box-yellow:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

  `],
})
export class PlayerComponent {
  constructor(public gameService: GameService) {}
}


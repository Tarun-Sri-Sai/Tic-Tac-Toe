import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-result',
  template: `
    <div class="result highlight-box-blue">
      {{
        this.gameService.result != this.gameService.EMPTY
          ? this.gameService.result + " has won!"
          : "Game has tied."
      }}
    </div>

  `,
  styles: [`
    div {
      font-size: 24px;
      border: 1px solid blue;
      width: fit-content;
      margin: 20px auto;
      padding: 10px;
      border-radius: 5px;
      background-color: #e0f0ff;
    }

    .highlight-box-blue {
      background-color: skyblue;
      color: #333333;
      border: 1px solid #87ceeb;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
    }

    .highlight-box-blue:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

  `],
})
export class ResultComponent {
  constructor(public gameService: GameService) {}
}


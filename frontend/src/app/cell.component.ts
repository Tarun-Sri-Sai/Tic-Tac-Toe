import { Component, Attribute, Input } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-cell',
  template: `
    <div class="container">
      <div class="cell" (click)="setPlayerMark()" [ngStyle]="getBackgroundColor()">
        {{ getMark() }}
      </div>
    </div>

  `,
  styles: [`
    .cell {
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      width: 100px;
      height: 100px;
      border-radius: 5px;
      margin: 10px;
      font-size: 90px;
    }

    .container {
      display: inline-table;
    }

  `],
})
export class CellComponent {
  row: number;
  col: number;

  constructor(
    public gameService: GameService,
    @Attribute('row') row: number,
    @Attribute('col') col: number
  ) {
    this.row = row;
    this.col = col;
  }

  setPlayerMark(): void {
    let matrix: string[][] = this.gameService.boardMatrix;

    if (
      matrix[this.row][this.col] != this.gameService.EMPTY ||
      !this.gameService.isPlayerTurn ||
      this.gameService.isOver
    ) {
      return;
    }
    matrix[this.row][this.col] = this.gameService.PLAYER;
    this.gameService.switchTurns();
    this.gameService.runGameLogic();
  }

  getBackgroundColor() {
    let matrix: string[][] = this.gameService.boardMatrix;

    if (matrix[this.row][this.col] == this.gameService.EMPTY) {
      return {
        'background-color': '#F0FFF0',
        border: '1px solid green',
      };
    }
    return {
      'background-color': '#FFE0E0',
      border: '1px solid red',
    };
  }

  getMark(): string {
    return this.gameService.boardMatrix[this.row][this.col];
  }
}


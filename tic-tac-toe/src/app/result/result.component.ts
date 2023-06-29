import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(public gameService: GameService) { }
}

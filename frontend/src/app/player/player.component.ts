import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
    constructor(public gameService: GameService) {}
}

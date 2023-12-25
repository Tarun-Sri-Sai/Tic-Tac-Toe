import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board.component';
import { CellComponent } from './cell.component';
import { PlayerComponent } from './player.component';
import { ResultComponent } from './result.component';
import { TitleComponent } from './title.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    PlayerComponent,
    ResultComponent,
    TitleComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,           // For template-driven forms and ngModel
    ReactiveFormsModule     // For reactive forms
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }

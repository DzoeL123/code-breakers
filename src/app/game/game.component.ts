import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  // game: Phaser.Game = new Game();
  public game!: Phaser.Game

  public userAnswer: string = '';
  public resultMessage: string = '';


  constructor( private scene: Phaser.Scene) {}

  ngOnInit() {
    this.initPhaser();
  }

  initPhaser() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {x: 0, y: 0 }
        }
      },
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    };

    this.game = new Phaser.Game(config);
  }

  preload() {
    // Load assets here if needed (e.g., images, sounds)
  }

  create() {
    // Create game level structure here
    const questionText = this.scene.add.text(100, 100, 'Question: 2 + 2 = ?', { fontSize: '24px', color: '#fff' });
    const answerText = this.scene.add.text(100, 200, 'Answer: ', { fontSize: '24px', color: '#fff' });
    const submitButton = this.scene.add.text(100, 300, 'Submit', { fontSize: '24px', color: '#00f' }).setInteractive();

    // Handle submit button click
    submitButton.on('pointerdown', () => {
      const result = this.scene.add.text(100, 400, 'Result: Correct!', { fontSize: '24px', color: '#0f0' });
    });
  }

  update() {
    // Game logic for the current level
  }

  testAnswer() {
    const correctAnswer = '4';
    if (this.userAnswer === correctAnswer) {
      this.resultMessage = 'Correct answer! You can submit now.';
    } else {
      this.resultMessage = 'Incorrect. Please try again!';
    }
  }

  submitAnswer() {
    if (this.resultMessage === 'Correct answer! You can submit now.') {
      this.resultMessage = 'Congratulations! You passed the level!';
      // Move to the next level or reset the game state
    } else {
      this.resultMessage = 'You must get the correct answer before submitting!';
    }
  }
}

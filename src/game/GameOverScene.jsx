// GameOverScene.js

import Phaser from 'phaser';

class GameOverScene extends Phaser.Scene {


  preload() {
    this.load.image('confetti1', 'src/assets/particles/confetti1.png');
  }

  create() {

    this.add.particles(0, -50, 'confetti1', {
        x: { min: 0, max: 800 },
        quantity: 2,
        lifespan: 2500,
        gravityY: 200,
        scale: 0.02,
        duration: 1000,
    });

    this.add.text(400, 300, 'Game Over', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);


  }
}

export default GameOverScene;

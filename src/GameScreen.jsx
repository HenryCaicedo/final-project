import React, { Component } from 'react';
import Phaser from 'phaser';
import map01 from './maps/map01';

const matrix = map01.matrix;
const tileSize = 75;
const startX = map01.start[0];
const startY = map01.start[1];
let carSpeed = 200; //duration
let orientation = "east";
let delay = 0;

const instructions = [
    { id: 1, type: "forward", value: 9 },
    { id: 2, type: "right" },
    { id: 1, type: "forward", value: 1 },
    { id: 2, type: "right" },
    { id: 1, type: "forward", value: 9 },
    { id: 2, type: "left" },
    { id: 1, type: "forward", value: 1 },
    { id: 2, type: "left" }
]


class Car extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);

        const carImg = scene.add.image(tileSize / 2 + tileSize * startX, tileSize / 2 + tileSize * startY, 'car').setOrigin(0.5, 0.5);

        carImg.setAngle(90)
        this.add([carImg])

        this.body = carImg;

        scene.add.existing(this);

  
        for (let i = 0; i <= 2; i++) {
            for (const instruction of instructions) {
                switch (instruction.type) {
                    case "right":
                        this.Derecha();
                        break;
                    case "left":
                        this.Izquierda();
                        break;
                    default:
                        this.Avanzar(instruction.value);
                        break;
                }
            }
        }
 
    }



    Avanzar(places) {
        const duration = places * carSpeed;

        switch (orientation) {
            default:
                this.scene.tweens.add({
                    targets: this,
                    y: '-=' + places * tileSize,
                    ease: 'Sine.inOut',
                    duration: duration,
                    delay: delay,
                });
                break;
            case "south":
                this.scene.tweens.add({
                    targets: this,
                    y: '+=' + places * tileSize,
                    ease: 'Sine.inOut',
                    duration: duration,
                    delay: delay,
                });
                break;
            case "east":
                this.scene.tweens.add({
                    targets: this,
                    x: '+=' + places * tileSize,
                    ease: 'Sine.inOut',
                    duration: duration,
                    delay: delay,
                });
                break;
            case "west":
                this.scene.tweens.add({
                    targets: this,
                    x: '-=' + places * tileSize,
                    ease: 'Sine.inOut',
                    duration: duration,
                    delay: delay,
                });
                break;
        }


        delay += duration;
    }

    Derecha() {

        orientation = orientation === "east" ? "south" :
            orientation === "south" ? "west" :
                orientation === "west" ? "north" :
                    "east";

        this.scene.tweens.add({
            targets: this.body,
            angle: '+=90', // Add the desired angle to the current angle
            duration: 1000,
            ease: 'elastic', // You can change the easing function as needed
            delay: delay,
        });

        delay += 500;
    }

    Izquierda() {

        orientation = orientation === "east" ? "north" :
            orientation === "south" ? "east" :
                orientation === "west" ? "south" :
                    "east";

        this.scene.tweens.add({
            targets: this.body,
            angle: '-=90', // Add the desired angle to the current angle
            duration: 1000,
            ease: 'elastic', // You can change the easing function as needed
            delay: delay,
        });

        delay += 500;
    }

    Shake() {
        // Define the shake animation
        this.scene.tweens.add({
            targets: this, // Change "this.body" to "this" to target the entire object
            duration: 100, // Duration of the shake in milliseconds
            x: '+=5', // Adjust the values based on how you want the object to shake
            y: '+=5',
            yoyo: true, // Yoyo makes the object return to its original position
            repeat: -1, // Repeat indefinitely for a continuous shake effect
        });
    }




}

class CarScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HelloWorldScene' });
    }

    preload() {
        this.load.image('car', 'src/assets/images/car.png')
    }

    create() {
        const g1 = this.add.grid(0, 0, matrix[0].length * tileSize, matrix.length * tileSize, tileSize, tileSize, 0x057605).setOrigin(0, 0);


        //const image = this.add.image(tileSize/2,tileSize/2,'car').setOrigin(0.5,0.5);
        new Car(this, startX, startY);
    }
}



class GameScreen extends Component {
    componentDidMount() {
        // Create a Phaser game configuration
        const config = {
            type: Phaser.AUTO,
            width: matrix[0].length * tileSize,
            height: matrix.length * tileSize,
            backgroundColor: 0x009203,
            scene: CarScene,
            parent: 'phaser-container',
        };

        // Initialize Phaser game
        this.game = new Phaser.Game(config);
    }

    render() {
        return (
            <div id="phaser-container" ></div>
        );
    }
}

export default GameScreen;

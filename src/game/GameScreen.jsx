import React, { Component, useContext, useEffect } from 'react';
import Phaser from 'phaser';
//import Car from './game/phaser_car'}
import mapListU1 from './maps/unit1';
import { fromJSON } from 'postcss';
import InstructionsContext from './InstructionsProvider';
console.clear();



const map = mapListU1.map03;

console.log(map);

const matrix = map.matrix;

// START
const startRow = map.start.row;
const startColumn = map.start.column;
const startOrientation = map.start.orientation;

// FINISH
const finishRow = map.finish.row;
const finishColumn = map.finish.column;
const finishOrientation = map.finish.orientation;


// SEMÁFORO
const trafficLightParameters = map.trafficLights;
const trafficLightObjects = [];
const yellowDuration = 500;
const colorDuration = 2000;

const tileSize = 80;
const aspectRatio = tileSize / 128;
const theme = 'Grass'

var currentRow = startRow;
var currentColumn = startColumn;
var currentInstructionIndex = 0;

// CARRO
const carSpeed = 350; //duration
const duracionGiro = 900;

var currentOrientation = startOrientation;

let instructions = [];

// const updateGameInstructions = (newInstructions) => {
//     instructions = newInstructions;
// };

// export { updateGameInstructions };


const instructions3 = [
    { type: "forward", value: 1 },
    { type: "left" },
    { type: "forward", value: 4 },
    { type: "right" },
    { type: "forward", value: 6 },
    { type: "right" },
    { type: "forward", value: 2 },
    { type: "right" },
    { type: "forward", value: 4 },
    { type: "left" },
    { type: "forward", value: 2 },
    { type: "left" },
    { type: "forward", value: 6 },
]

const instructions2 = [
    { type: "forward", value: 1 },
    { type: "left" },
    { type: "forward", value: 1 },
    { type: "wait" },
    { type: "forward", value: 3 },
    { type: "right" },
    { type: "forward", value: 1 },
    { type: "wait" },
    { type: "forward", value: 5 },
    { type: "right" },
    { type: "wait" },
    { type: "forward", value: 2 },
    { type: "right" },
    { type: "forward", value: 4 },
    { type: "left" },
    { type: "forward", value: 2 },
    { type: "left" },
    { type: "forward", value: 2 },
    { type: "wait" },
    { type: "forward", value: 4 },
]


class TrafficLight extends Phaser.GameObjects.Container {
    constructor(scene, column, row, orientation, side, isRed) {
        super(scene, tileSize / 2 + tileSize * column, tileSize / 2 + tileSize * row);


        //TODO: 
        // En amarillo se puede pasar

        this.isRed = isRed;
        this.column = column;
        this.row = row;

        const road_stop = scene.add.image(0, 0, 'road_stop').setDisplaySize(tileSize, tileSize).setOrigin(0.5, 0.5);
        road_stop.setAlpha(0.6);


        // Parámetro para escoger de qué lado de la carretera estará el semáforo
        const num = (side === undefined) ? -1 : 1;

        // Textura semáforo
        const initialColor = isRed ? 1 : 3;
        const trafficLights = scene.add.sprite(side * tileSize * .75, 0, 'traffic_lights', initialColor).setOrigin(0.5, 0.5);
        trafficLights.setScale(aspectRatio * 0.8);

        this.add([road_stop, trafficLights]);

        this.road_stop = road_stop;
        this.trafficLights = trafficLights;

        scene.add.existing(this);

        let angle = 0;

        switch (orientation) {
            default: angle = 0;
                break;
            case 'east': angle = 90;
                break;
            case 'south': angle = 180;
                break;
            case 'west': angle = 270;
                break;
        }



        this.setAngle(angle);
        this.updateColor();

    }



    updateColor() {
        if (this.isRed == false) {
            setTimeout(() => {
                this.trafficLights.setTexture('traffic_lights', 2);
                setTimeout(() => {
                    this.trafficLights.setTexture('traffic_lights', 1);
                    this.isRed = true;
                    this.updateColor();
                }, yellowDuration);
            }, colorDuration);
        } else {
            setTimeout(() => {
                this.trafficLights.setTexture('traffic_lights', 2);
                setTimeout(() => {
                    this.trafficLights.setTexture('traffic_lights', 3);
                    this.isRed = false;
                    this.updateColor();
                }, yellowDuration);
            }, colorDuration);
        }

    }

}


class Car extends Phaser.GameObjects.Container {
    constructor(scene, instructions) {
        super(scene);

        const carImg = scene.add.image(tileSize / 2 + tileSize * startColumn, tileSize / 2 + tileSize * startRow, 'car');
        carImg.setScale(aspectRatio * 1.2)

        let angle = 0;
        switch (startOrientation) {
            default: angle = 0;
                break;
            case 'east': angle = 90;
                break;
            case 'south': angle = 180;
                break;
            case 'west': angle = 270;
                break;
        }

        carImg.setAngle(angle)
        this.add(carImg)
        this.instructions = instructions;

        this.body = carImg;

        scene.add.existing(this);

        //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens

    }


    ejecutarInstruccion(index) {

        const instruction = this.instructions[index];

        switch (instruction.type) {
            case "right":
                this.derecha();
                break;
            case "left":
                this.izquierda();
                break;
            case "wait":
                this.Esperar();
                break;
            default:
                this.avanzar(instruction.value);
        }

    }

    siguienteInstruccion() {
        currentInstructionIndex += 1;

        if (currentInstructionIndex <= this.instructions.length - 1) {
            this.ejecutarInstruccion(currentInstructionIndex);
        }
    }


    semaforoEnRojo(row, column) {
        console.log('Checking Semaforo');
        for (let semaforo of trafficLightObjects) {
            console.log('Looking');
            console.log(row, column);
            console.log(semaforo.row, semaforo.column);
            if (semaforo.row === row && semaforo.column === column) {
                if (semaforo.isRed){
                    return true;
                }
            }
        }
        return false;
    }
    


    avanzar(places) {

        const duration = carSpeed;

        switch (currentOrientation) {

            case "north":

                currentRow -= places;

                this.scene.tweens.add({
                    targets: this,
                    y: '-=' + tileSize,
                    ease: 'Linear',
                    duration: duration,
                    onComplete: () => {
                        if (places > 1) {
                            this.avanzar(places - 1);
                        } else {
                            this.siguienteInstruccion();
                        }
                    }
                });
                break;

            case "south":

                currentRow += places;

                this.scene.tweens.add({
                    targets: this,
                    y: '+=' + tileSize,
                    ease: 'Linear',
                    duration: duration,
                    onComplete: () => {
                        if (places > 1) {
                            this.avanzar(places - 1);
                        } else {
                            this.siguienteInstruccion();
                        }
                    }
                });


                break;

            case "east":


                if (!this.semaforoEnRojo(currentRow, currentColumn+1)) {
                    currentColumn += 1;

                    this.scene.tweens.add({
                        targets: this,
                        x: '+=' + tileSize,
                        ease: 'Linear',
                        duration: duration,
                        onComplete: () => {
                            if (places > 1) {
                                this.avanzar(places - 1);
                            } else {
                                this.siguienteInstruccion();
                            }
                        }
                    });
                }


                break;

            case "west":

                currentColumn -= places;

                this.scene.tweens.add({
                    targets: this,
                    x: '-=' + tileSize,
                    ease: 'Linear',
                    duration: duration,
                    onComplete: () => {
                        if (places > 1) {
                            this.avanzar(places - 1);
                        } else {
                            this.siguienteInstruccion();
                        }
                    }
                });
                break;
        }
    }


    derecha() {
        switch (currentOrientation) {
            case "east": currentOrientation = "south";
                break;
            case "south": currentOrientation = "west";
                break;
            case "west": currentOrientation = "north";
                break;
            case "north": currentOrientation = "east";
                break;
        }

        this.scene.tweens.add({
            targets: this.body,
            angle: '+=90',
            duration: duracionGiro,
            ease: 'elastic',
            onComplete: () => {
                console.log('Derecha');
                this.siguienteInstruccion();
            }
        });
    }

    izquierda() {

        switch (currentOrientation) {
            case "east": currentOrientation = "north";
                break;
            case "north": currentOrientation = "west";
                break;
            case "west": currentOrientation = "south";
                break;
            case "south": currentOrientation = "east";
                break;
        }


        this.scene.tweens.add({
            targets: this.body,
            angle: '-=90',
            duration: duracionGiro,
            ease: 'elastic',
            onComplete: () => {
                this.siguienteInstruccion();
            }
        });

    }


}



class CarScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HelloWorldScene' });
    }



    preload() {
        this.load.image('car', 'src/assets/images/car.png');

        this.load.image('road_stop', 'src/assets/tiles/misc/road_stop.png');

        this.load.image('goal', `src/game/assets/tiles/Grass/road/goal.png`);

        this.load.image('start', `src/game/assets/tiles/Grass/road/start.png`);



        this.load.spritesheet('traffic_lights', 'src/assets/tiles/misc/traffic_lights_sprites.png', { frameWidth: 50, frameHeight: 116 });

        // Load Grass
        for (let i = 1; i <= 14; i++) {
            const imageName = `land${i}`;
            const imagePath = `src/assets/tiles/${theme}/${imageName}.png`;
            this.load.image(imageName, imagePath);
        }

        // Load Asphalt Road
        for (let i = 1; i <= 6; i++) {
            const imageName = `road${i}`;
            const imagePath = `src/assets/tiles/${theme}/road/${imageName}.png`;
            this.load.image(imageName, imagePath);
        }




    }

    // Draws the background grass
    drawBackground() {
        for (let i = 0; i <= matrix[0].length; i++) {
            for (let j = 0; j <= matrix[0].length; j++) {
                // Generate a random number between 0 and 1
                const randomNumber = Math.random();
                // Use the random number to choose between the two images
                if (randomNumber < 0.5) {
                    var texture = 'land4'
                } else {
                    var texture = 'land11'
                }
                this.add
                    .image(i * tileSize, j * tileSize, texture)
                    .setDisplaySize(tileSize, tileSize)
                    .setOrigin(0);
            }
        }
    }


    drawRoad() {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] != 0) {
                    this.add
                        .image(j * tileSize, i * tileSize, 'road' + matrix[i][j])
                        .setDisplaySize(tileSize, tileSize)
                        .setOrigin(0);
                }

            }
        }


        // Finish
        let angle = 0;
        switch (finishOrientation) {
            default: angle = 0;
                break;
            case 'east': angle = 90;
                break;
            case 'south': angle = 180;
                break;
            case 'west': angle = 270;
                break;
        }

        this.add
            .image(finishColumn * tileSize + tileSize / 2, finishRow * tileSize + tileSize / 2, 'goal')
            .setDisplaySize(tileSize, tileSize)
            .setOrigin(0.5).setAngle(angle);

        switch (startOrientation) {
            default: angle = 0;
                break;
            case 'east': angle = 90;
                break;
            case 'south': angle = 180;
                break;
            case 'west': angle = 270;
                break;
        }

        this.add
            .image(startColumn * tileSize + tileSize / 2, startRow * tileSize + tileSize / 2, 'start')
            .setDisplaySize(tileSize, tileSize)
            .setOrigin(0.5).setAngle(angle);





    }


    create() {

        // Background
        this.drawBackground();
        // Road
        this.drawRoad();
        // Grid
        this.add.grid(0, 0, matrix[0].length * tileSize, matrix.length * tileSize, tileSize, tileSize, 0xff0000, 0, 0x000000, 0.1).setOrigin(0);


        for (const object of trafficLightParameters) {
            trafficLightObjects.push(new TrafficLight(this, object.column, object.row, object.orientation, object.value, object.isRed));
        }



        const externalButton = document.getElementById("run_code");


        var carro = new Car(this, instructions);

        if (externalButton) {
            externalButton.addEventListener("click", () => {

                carro.destroy();

                carro = new Car(this, instructions);

                currentRow = startRow;
                currentColumn = startColumn;
                currentOrientation = 'east';
                currentInstructionIndex = 0;

                if (instructions.length > 0) {
                    carro.ejecutarInstruccion(0);
                }


            });
        }


    }
}


function GameScreen() {
    const { instructions: instructionsFromReact } = useContext(InstructionsContext);

    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: matrix[0].length * tileSize,
            height: matrix.length * tileSize,
            backgroundColor: 0x009203,
            scene: CarScene,
            parent: 'phaser-container',
        };

        // Initialize Phaser game
        const game = new Phaser.Game(config);
    }, [])

    useEffect(() => {
        instructions = [...instructionsFromReact]
    }, [instructionsFromReact])

    return (
        <div id="phaser-container" className='rounded-[5vh] border-[6px] overflow-hidden'></div>
    );
}

export default GameScreen;

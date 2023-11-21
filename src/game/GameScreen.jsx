// GameScreen.jsx
import React, { Component, useContext, useEffect } from 'react';
import Phaser from 'phaser';
//import Car from './game/phaser_car'}
import mapListU1 from './maps/unit1';
import { fromJSON } from 'postcss';
import InstructionsContext from './InstructionsProvider';
import axios from 'axios';
import { setMap, globalMap } from './currentMap';
console.clear();


const PopupComponent = ({ onClose }) => {
    return (
      <div className="popup">
        <p>Congratulations! You completed the level.</p>
        <button onClick={onClose}>Continue to the next level</button>
      </div>
    );
  };
  

var currentMap;


export const setCurrentMap = (map) => {
    currentMap = map;

    matrix = currentMap.matrix;

    // START
    startRow = currentMap.start.row;
    startColumn = currentMap.start.column;
    startOrientation = currentMap.start.orientation;

    // FINISH
    finishRow = currentMap.finish.row;
    finishColumn = currentMap.finish.column;
    finishOrientation = currentMap.finish.orientation;


    // SEMÁFORO
    trafficLightParameters = currentMap.trafficLights;
    trafficLightObjects = [];


    currentRow = startRow;
    currentColumn = startColumn;
    currentOrientation = startOrientation;
    currentInstructionIndex = 0;

    var instructions = [];

    console.log(currentMap);
}

setCurrentMap(globalMap);

var matrix = currentMap.matrix;

// START
var startRow = currentMap.start.row;
var startColumn = currentMap.start.column;
var startOrientation = currentMap.start.orientation;

// FINISH
var finishRow = currentMap.finish.row;
var finishColumn = currentMap.finish.column;
var finishOrientation = currentMap.finish.orientation;


// SEMÁFORO
var trafficLightParameters = currentMap.trafficLights;
var trafficLightObjects = [];


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

var instructions = [];

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
                this.isRed = false;
                setTimeout(() => {
                    this.trafficLights.setTexture('traffic_lights', 3);

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


        console.log(currentOrientation);

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
                this.esperar();
                break;
            default:
                this.avanzar(instruction.value);
        }

    }

    async siguienteInstruccion() {

        if (!this.gameOver()) {

            currentInstructionIndex += 1;

            if (currentInstructionIndex <= this.instructions.length - 1) {
                this.ejecutarInstruccion(currentInstructionIndex);
            }
        } else {

            // Display POPUP

            this.scene.add.particles(0, -50, 'confetti1', {
                x: { min: 0, max: 800 },
                quantity: 2,
                lifespan: 2500,
                gravityY: 200,
                scale: 0.02,
            });


            try {

                const userId = localStorage.getItem("id");
                const unidad = localStorage.getItem("unidad");
                console.log(unidad);
                const nivel = localStorage.getItem("nivel");
                console.log(nivel);

                const response1 = await axios.post(
                    "https://api-coderacers.onrender.com/mapa/read",
                    {
                        unidad: unidad,
                        nivel: nivel,
                    }
                );

                console.log(response1);

                const mapaId = response1.data.mapaId;

                localStorage.setItem("mapaId", mapaId);

                const requestBody = {
                    nuevoMapaId: mapaId,
                };

                console.log(mapaId);
                console.log("El axios");

                const response2 = await axios.patch(
                    `https://api-coderacers.onrender.com/${userId}`,
                    requestBody
                );

                console.log(
                    "Mapa añadido al progreso del usuario:",
                    response2.data.usuarioActualizado
                );
            } catch (error) {
                console.error(
                    "Error:",
                    error.response ? error.response.data.message : error.message
                );
            }
        }

        console.log("Game over");
    }

    gameOver() {
        if (currentRow === finishRow && currentColumn === finishColumn) {
            return true;
        }
        return false;
    }

    semaforoEnRojo(row, column) {
        for (let semaforo of trafficLightObjects) {
            if (semaforo.row === row && semaforo.column === column) {
                if (semaforo.isRed) {
                    return true;
                }
            }
        }
        return false;
    }


    ObstaculoEnfrente() {
        switch (currentOrientation) {
            case "north":
                if (![1, 3, 4].includes(matrix[currentRow - 1][currentColumn])) {
                    return true;
                }
                break;
            case "south":
                if (![1, 5, 6].includes(matrix[currentRow + 1][currentColumn])) {
                    return true;
                }
                break;
            case "east":
                if (![2, 4, 6].includes(matrix[currentRow][currentColumn + 1])) {
                    console.log("Hay un obstáculo.");
                    return true;
                }
                break;
            case "west":
                if (![2, 3, 5].includes(matrix[currentRow][currentColumn - 1])) {
                    return true;
                }
                break;

        }
        return false;
    }


    mostrarError() {
        // Check if there is already an error text on the screen
        const existingErrorText = this.scene.children.getByName('errorText');

        if (existingErrorText) {
            existingErrorText.destroy(); // Remove existing error text if any
        }


        const errorLine = currentInstructionIndex + 1;
        const str = 'Error de ejecución en la línea ' + errorLine;

        // Add tween to display text ("Error de ejecución")
        const errorText = this.scene.add.text(
            matrix.length/2 * tileSize,
            matrix[0].length/2 * tileSize,
            str,
            {
                fontFamily: 'Arial',
                fontSize: 18,
                color: 'white',
                align: 'center',
                backgroundColor: 'red',
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 10,
                    right: 10,
                },
            }
        );

        errorText.setOrigin(0.5);

        errorText.setName('errorText');

        this.scene.tweens.add({
            targets: errorText,
            alpha: 0,
            duration: 2000, 
            ease: 'Linear',
            onComplete: () => {
                errorText.destroy();
            },
            delay: 5000,
        });
    }


    revisarSiGano() {
        if (currentColumn === finishColumn && currentRow === finishRow) {
            console.log("Game over");
        }
    }


    avanzar(places) {


        const duration = carSpeed;
        let value;
        let ease;
        let error;

        if (!this.gameOver()) {

            switch (currentOrientation) {

                case "north":

                    error = this.semaforoEnRojo(currentRow - 1, currentColumn) || this.ObstaculoEnfrente();
                    value = error ? 0.6 : 1;
                    ease = error ? 'Linear' : 'Linear';


                    this.scene.tweens.add({
                        targets: this,
                        y: '-=' + tileSize * value,
                        ease: ease,
                        duration: duration,
                        onComplete: () => {
                            if (!error) {
                                currentRow -= 1;
                                if (!this.revisarSiGano()) {
                                    if (places > 1) {
                                        this.avanzar(places - 1);
                                    } else {
                                        this.siguienteInstruccion();
                                    }
                                }
                            } else {
                                this.mostrarError();
                            }
                        }
                    });


                    break;

                case "south":

                    console.log("AVANZANDO EN DIRECCIÓN", currentOrientation);

                    error = this.semaforoEnRojo(currentRow + 1, currentColumn) || this.ObstaculoEnfrente();
                    value = error ? 0.6 : 1;
                    ease = error ? 'Linear' : 'Linear';


                    this.scene.tweens.add({
                        targets: this,
                        y: '+=' + tileSize * value,
                        ease: ease,
                        duration: duration,
                        onComplete: () => {
                            if (!error) {
                                currentRow += 1;
                                if (!this.revisarSiGano()) {
                                    if (places > 1) {
                                        this.avanzar(places - 1);
                                    } else {
                                        this.siguienteInstruccion();
                                    }
                                }
                            } else {
                                this.mostrarError();
                            }
                        }
                    });


                    break;

                case "east":

                    error = this.semaforoEnRojo(currentRow, currentColumn + 1) || this.ObstaculoEnfrente();
                    value = error ? 0.6 : 1;
                    ease = error ? 'Linear' : 'Linear';


                    this.scene.tweens.add({
                        targets: this,
                        x: '+=' + tileSize * value,
                        ease: ease,
                        duration: duration,
                        onComplete: () => {
                            if (!error) {
                                currentColumn += 1;
                                if (!this.revisarSiGano()) {
                                    if (places > 1) {
                                        this.avanzar(places - 1);
                                    } else {
                                        this.siguienteInstruccion();
                                    }
                                }
                            } else {
                                this.mostrarError();
                            }
                        }
                    });

                    break;

                case "west":

                    error = this.semaforoEnRojo(currentRow, currentColumn - 1) || this.ObstaculoEnfrente();
                    value = error ? 0.6 : 1;
                    ease = error ? 'Linear' : 'Linear';


                    this.scene.tweens.add({
                        targets: this,
                        x: '-=' + tileSize * value,
                        ease: ease,
                        duration: duration,
                        onComplete: () => {
                            if (!error) {
                                currentColumn -= 1;
                                if (!this.revisarSiGano()) {
                                    if (places > 1) {
                                        this.avanzar(places - 1);
                                    } else {
                                        this.siguienteInstruccion();
                                    }
                                }
                            } else {
                                this.mostrarError();
                            }
                        }
                    });


                    break;
            }
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


    esperar() {

        let semaforoEnRojo = true;

        switch (currentOrientation) {
            case "east":

                semaforoEnRojo = this.semaforoEnRojo(currentRow, currentColumn + 1);

                if (semaforoEnRojo) {
                    setTimeout(() => {
                        this.siguienteInstruccion();
                    }, colorDuration + 1);
                } else {
                    this.siguienteInstruccion();

                }

                break;
            case "north":

                semaforoEnRojo = this.semaforoEnRojo(currentRow - 1, currentColumn);

                if (semaforoEnRojo) {
                    setTimeout(() => {
                        this.siguienteInstruccion();
                    }, colorDuration + 1);
                } else {
                    this.siguienteInstruccion();

                }

                break;
            case "west":

                semaforoEnRojo = this.semaforoEnRojo(currentRow, currentColumn - 1);

                if (semaforoEnRojo) {
                    setTimeout(() => {
                        this.siguienteInstruccion();
                    }, colorDuration + 1);
                } else {
                    this.siguienteInstruccion();

                }

                break;
            case "south":

                semaforoEnRojo = this.semaforoEnRojo(currentRow + 1, currentColumn);

                if (semaforoEnRojo) {
                    setTimeout(() => {
                        this.siguienteInstruccion();
                    }, colorDuration + 1);
                } else {
                    this.siguienteInstruccion();

                }

                break;
        }
    }



}



class CarScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HelloWorldScene' });
    }


    startGameOverScene() {
        this.scene.start("GameOverScene");
    }


    preload() {
        this.load.image('confetti1', 'src/assets/particles/confetti1.png');

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
            for (let j = 0; j <= matrix.length; j++) {
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


                this.tweens.killTweensOf([carro]);

                carro.destroy();

                carro = new Car(this, instructions);

                currentRow = startRow;
                currentColumn = startColumn;
                currentOrientation = startOrientation;
                currentInstructionIndex = 0;

                if (instructions.length > 0) {
                    carro.ejecutarInstruccion(0);
                }


            });
        }

    }
}



function GameScreen({ map }) {
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


async function fetchData() {
    try {
        const userId = localStorage.getItem("id");
        const unidad = localStorage.getItem("unidad");
        console.log(unidad);
        const nivel = localStorage.getItem("nivel");
        console.log(nivel);
        const response1 = await axios.post(
            "https://api-coderacers.onrender.com/mapa/read",
            {
                unidad: unidad,
                nivel: nivel,
            }
        );
        console.log(response1);
        localStorage.setItem("mapaId", response1.data.mapaId);
        const requestBody = {
            nuevoMapaId: mapaId,
        };

        console.log(mapaId);
        console.log("El axios");

        const response2 = await axios.patch(`https://api-coderacers.onrender.com/${userId}`, requestBody);

        console.log('Mapa añadido al progreso del usuario:', response2.data.usuarioActualizado);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data.message : error.message);
    }
}

export default GameScreen;

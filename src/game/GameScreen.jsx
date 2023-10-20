import React, { Component } from 'react';
import Phaser from 'phaser';
//import Car from './game/phaser_car'
import map01 from './maps/map01';
import map02 from './maps/map02';

console.clear();


const map = map01;

const matrix = map.matrix;
const startRow = map.start[0];
const startColumn = map.start[1];




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

// CARRO
const carSpeed = 350; //duration
const duracionGiro = 900;

var orientation = map.orientation;
var delay = 0;

const instructions = [
    {type: "forward", value: 1 },
    {type: "left" },
    {type: "forward", value: 4 },
    {type: "right" },
    {type: "forward", value: 6 },
    {type: "right" },
    {type: "forward", value: 2 },
    {type: "right" },
    {type: "forward", value: 4 },
    {type: "left" },
    {type: "forward", value: 2 },
    {type: "left" },
    {type: "forward", value: 6 },
]


class TrafficLight extends Phaser.GameObjects.Container {
    constructor(scene, column, row, orientation, side, isGreen) {
        super(scene, tileSize / 2 + tileSize * column, tileSize / 2 + tileSize * row);


        //TODO: 
        // En amarillo se puede pasar

        this.isGreen = isGreen;
        this.column = column;
        this.row = row;

        const road_stop = scene.add.image(0, 0, 'road_stop').setDisplaySize(tileSize, tileSize).setOrigin(0.5, 0.5);
        road_stop.setAlpha(0.6);


        // Parámetro para escoger de qué lado de la carretera estará el semáforo
        const num = (side === undefined) ? -1 : 1;

        // Textura semáforo
        const initialColor = isGreen ? 3 : 1;
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
 


    updateColor(){
        if (this.isGreen == false) {
            setTimeout(() => {
                this.trafficLights.setTexture('traffic_lights', 2);
                setTimeout(() => {
                    this.trafficLights.setTexture('traffic_lights', 3);
                    this.isGreen=true;
                    this.updateColor();
                }, yellowDuration);
            }, colorDuration);
        }else{
            setTimeout(() => {
                this.trafficLights.setTexture('traffic_lights', 2);
                setTimeout(() => {
                    this.trafficLights.setTexture('traffic_lights', 1);
                    this.isGreen=false;
                    this.updateColor();
                }, yellowDuration);
            }, colorDuration);
        }
           
    }

}


class Car extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene);

        const carImg = scene.add.image(tileSize / 2 + tileSize * startColumn, tileSize / 2 + tileSize * startRow, 'car');
        carImg.setScale(aspectRatio * 1.2)

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

        carImg.setAngle(angle)
        this.add(carImg)

        this.body = carImg;

        scene.add.existing(this);

        //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
        outerLoop: for (const instruction of instructions) {
            switch (instruction.type) {
                case "right":
                    this.Derecha();
                    break;
                case "left":
                    this.Izquierda();
                    break;
                default:
                    var places = this.LugaresAvanzables();
                    if (places >= instruction.value) {
                        this.Avanzar(instruction.value);
                    } else {
                        this.Avanzar(places + 0.7)
                        console.log("Error de ejecución.")
                        break outerLoop;
                    }
            }
        }
    }

        
    semaforoUbicadoEn(column, row) {
        for (const semaforo of trafficLightObjects) {
            if (semaforo.column == column && semaforo.row == row) {
                return true;
            }
        }
        return false;
    }


    getSemaforo(column, row) {
        for (const semaforo of trafficLightObjects) {
            if (semaforo.column == column && semaforo.row == row) {
                return semaforo;
            }
        }
    }
    
    semaforoEnVerde(totalTime,semaforo){


        console.log('--------------------------------------------');

        console.log('Tiempo para llegar al semáforo: ', totalTime);

        let isRed=!semaforo.isGreen;
        let upperBound;

        if(isRed){

            upperBound=colorDuration;

            if(upperBound<totalTime){
                upperBound+=2*(colorDuration+yellowDuration);
            }
            if(upperBound<totalTime){
                upperBound+=yellowDuration;
                while(upperBound<=totalTime){
                    upperBound+=2*(colorDuration+yellowDuration);
                }
            }
        }else{

            upperBound=2*colorDuration+yellowDuration;

            if(upperBound<totalTime){
                upperBound+=2*colorDuration+3*yellowDuration;
            }
            if(upperBound<totalTime){
                while(upperBound<totalTime){
                    upperBound+=2*(colorDuration+yellowDuration);
                }
            }

        }

        let lowerBound = upperBound-colorDuration;
        if (lowerBound <= totalTime && totalTime <= upperBound) {
            isRed = true;
            //console.log('Tiempo para que el semáforo cambie: ', upperBound-totalTime);
        }else{
            isRed = false;
        }
        return !isRed;
    }


    LugaresAvanzables() {
        let row = currentRow;
        let column = currentColumn;
        let c = 0;
        let tempDelay = delay;
    
        switch (orientation) {
            case 'north':
                while ([1, 3, 4].includes(matrix[row - 1][column])) {
                    if (this.semaforoUbicadoEn(column, row - 1)) {
                        var semaforo = this.getSemaforo(column, row - 1)
                        if(this.semaforoEnVerde(tempDelay,semaforo) == false){
                            break;
                        }
                    }
                    tempDelay += carSpeed;
                    c++;
                    row--;
                    if ([3, 4].includes(matrix[row][column])) {
                        break;
                    }
                }
                break;
            case 'south':
                while ([1, 5, 6].includes(matrix[row + 1][column])) {
                    if (this.semaforoUbicadoEn(column, row + 1)) {
                        var semaforo = this.getSemaforo(column, row + 1)
                        if(this.semaforoEnVerde(tempDelay,semaforo) == false){
                            break;
                        }
                    }
                    tempDelay += carSpeed;
                    c++;
                    row++;
                    if ([5, 6].includes(matrix[row][column])) {
                        break;
                    }
                }
                break;
            case 'east':
                while ([2, 4, 6].includes(matrix[row][column + 1])) {
                    if (this.semaforoUbicadoEn(column + 1, row)) {
                        var semaforo = this.getSemaforo(column+1, row)
                        if(this.semaforoEnVerde(tempDelay,semaforo) == false){
                            break;
                        }
                    }
                    tempDelay += carSpeed;
                    c++;
                    column++;
                    if ([4, 6].includes(matrix[row][column])) {
                        break;
                    }
                }
                break;
            case 'west':
                while ([2, 3, 5].includes(matrix[row][column - 1])) {
                    if (this.semaforoUbicadoEn(column - 1, row)) {
                        var semaforo = this.getSemaforo(column-1, row)
                        if(this.semaforoEnVerde(tempDelay,semaforo) == false){
                            break;
                        }
                    }
                    tempDelay += carSpeed;
                    c++;
                    column--;
                    if ([3, 5].includes(matrix[row][column])) {
                        break;
                    }
                }
                break;
        }
        return c;
    }
    

    Avanzar(places) {
        const duration = places * carSpeed;
        switch (orientation) {
            case "north":
                this.scene.tweens.add({
                    targets: this,
                    y: '-=' + places * tileSize,
                    ease: 'Sine.Out',
                    duration: duration,
                    delay: delay,
                });
                currentRow -= places;
                break;
            case "south":
                this.scene.tweens.add({
                    targets: this,
                    y: '+=' + places * tileSize,
                    ease: 'Sine.Out',
                    duration: duration,
                    delay: delay,
                });
                currentRow += places;
                break;
            case "east":
                this.scene.tweens.add({
                    targets: this,
                    x: '+=' + places * tileSize,
                    ease: 'Sine.Out',
                    duration: duration,
                    delay: delay,
                });
                currentColumn += places;
                break;
            case "west":
                this.scene.tweens.add({
                    targets: this,
                    x: '-=' + places * tileSize,
                    ease: 'Sine.Out',
                    duration: duration,
                    delay: delay,
                });
                currentColumn -= places;
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
            duration: duracionGiro,
            ease: 'elastic', // You can change the easing function as needed
            delay: delay,
        });

        delay += duracionGiro;
    }

    Izquierda() {

        orientation = orientation === "east" ? "north" :
            orientation === "south" ? "east" :
                orientation === "west" ? "south" :
                    "east";

        this.scene.tweens.add({
            targets: this.body,
            angle: '-=90', // Add the desired angle to the current angle
            duration: duracionGiro,
            ease: 'elastic', // You can change the easing function as needed
            delay: delay,
        });

        delay += duracionGiro;
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
        this.load.image('car', 'src/assets/images/car.png');

        this.load.image('road_stop', 'src/assets/tiles/misc/road_stop.png');

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
    }



    create() {
        

        // Background
        this.drawBackground();
        // Road
        this.drawRoad();
        // Grid
        this.add.grid(0, 0, matrix[0].length * tileSize, matrix.length * tileSize, tileSize, tileSize, 0xff0000, 0, 0x000000, 0.1).setOrigin(0);


        for (const object of trafficLightParameters) {
            trafficLightObjects.push(new TrafficLight(this, object.column, object.row, object.orientation, object.value, object.isGreen));
        }

        new Car(this);



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

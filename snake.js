const Bg_Clr = '#F8DF77';
const Snake_Clr = '#2ECFCA';
const Food_clr = '#FF4E62';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.height = 400;

const FR = 10; //Frame Rate
const S = 20; //Screen Size
const T = canvas.width / S; //Tile Size Canvas Width divided by Screen Size

let pos /*position*/, vel /*velocity*/, food, snake;

function init(){
    pos = {x: 10, y: 10};
    vel = {x: 0, y: 0};

    snake = [
        {x: 8, y: 10},
        {x: 9, y: 10},
        {x: 10, y: 10},
    ]
    
}
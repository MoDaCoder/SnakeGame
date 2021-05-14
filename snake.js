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
    
    randomFood();
};

init();

function randomFood(){
    food = {
        x: Math.floor(Math.random() * T),
        y: Math.floor(Math.random() * T)
    }

    for (let cell of snake) {
        if(cell.x === food.x && food.y === cell.y){
            return randomFood();
        }
    }
}

document.addEventListener('keydown', keydown);

function keydown(e){
    switch(e.keyCode){
        case 37: {
            return vel = {x: -1, y: 0}
        }
        case 38: {
            return vel = {x: 0, y: -1}
        }
        case 39: {
            return vel = {x: 1, y: 0}
        }
        case 40: {
            return vel = {x: 0, y: 1}
        }
    }
}

setInterval(() => {
    requestAnimationFrame(gameLoop);
}, 1000 /FR);

function gameLoop(){
    ctx.fillStyle = Bg_clr;
    ctx.fillReact(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = Snake_clr;
    for (let cell of snake) {
        ctx.fillRect(cell.x*S, cell.y*S, S,S);
    }
    
    ctx.fillStyle = Food_clr;
    ctx.fillReact(food.x*S, food.y*S,S,S);

    pos.x += vel.x;
    pos.y += vel.y;

    if (pos.x < 0 || pos.x > T || pos.y < 0 || pos.y > T){
      init();  
    }

    if (food.x === pos.x && food.y === pos.y){  /*Checking to see if the snake ate the food */
        snake.push({...pos});
        pos.x += vel.x;
        pos.y += vel.y;
        randomFood();
    }

}
const Bg_Clr = '#F8DF77';
const Snake_Clr = '#2ECFCA';
const Food_Clr = '#FF4E62';

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

// gameOverMessage() /*How do I get this to work?*/

function gameLoop(){
    ctx.fillStyle = Bg_Clr;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = Snake_Clr;
    for (let cell of snake) {
        ctx.fillRect(cell.x*S, cell.y*S, S,S);
    }
    
    ctx.fillStyle = Food_Clr;
    ctx.fillRect(food.x*S, food.y*S,S,S);

    pos.x += vel.x;
    pos.y += vel.y;

    if (pos.x < 0 || pos.x > T || pos.y < 0 || pos.y > T){
    alert("Are you blind or something!?")
    alert("There's a wall there!")
    alert("Game Over Loser")
      init();  
    }

    if (food.x === pos.x && food.y === pos.y){  /*Checking to see if the snake ate the food */
        snake.push({...pos});
        pos.x += vel.x;
        pos.y += vel.y;
        randomFood();
    }

    if (vel.x || vel.y){ /*Checking to see if snake bumped into itself and if it did it's returning it to initial state*/ 
    for (let cell of snake){
        if (cell.x === pos.x && cell.y === pos.y){
            alert("-___-")
            alert("Are you kidding me???")
            alert("How are you just going to eat yourself like that!?")
            alert("Try not to eat yourself again dweeb")
            return init();
        }
    }
    
    snake.push({...pos}); /*Look up what this does exactly*/ 
    snake.shift();
}
}
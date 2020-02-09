var background,canvas
var gameState=0;
var playerCount;
var form,game,player;
var database
var allPlayers;
var distance = 0;
var athelets=[];
var athelet1,athelet2,athelet3,athelet4;

function preload()
{
    track=loadImage("images/2.jpg");
    run1=loadImage("images/runner.png");
}

function setup()
{
    canvas=createCanvas(displayWidth,displayHeight);
    database=firebase.database();

    game=new Game();
    game.getState();
    game.start()
}

function draw()
{
    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
    
}
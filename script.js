//the grid that logs moves
var grid = [
    ["1","2","3"],
    ["5","4","6"],
    ["7","8","9"]
];

var allKeys = document.querySelectorAll(".row div");
var result;
var cross =true;
//switch player, updating grid and adding image into the grid
var moves = function(event){
    if(event.target.className === "circle" || event.target.className === "ex" || result!== undefined){
        return;
    }else{
        if(cross==true && event.target.textContent != "X" && event.target.textContent != "0"){
            event.target.classList.add("ex");
            var pos = event.target.id.split('');
            grid[+pos[0]][+pos[1]] = "X";
        }else if (cross!== true && event.target.textContent != "X" && event.target.textContent != "0"){
            event.target.classList.add("circle");
            var pos2 =event.target.id.split('');
            grid[+pos2[0]][+pos2[1]] = "0";
        }   
        cross=!cross;
        checkWins();
    }
} 
//listening for moves
allKeys.forEach(function(item){
    item.addEventListener("click",moves);
});

//checking wins by checking the grid and adding animation for the winner
var checkWins = function() {
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[i].length;j++){    
            if((grid[i][0]==="X" && grid[i][1]==="X" && grid[i][2]==="X")||
            (grid[i][0]==="0" && grid[i][1]==="0" && grid[i][2]==="0")){
                if(grid[i][2]==="X"){
                    result="<i>This is how we SURVIVE! </i>---Rick Grimes wins!";
                    rickWinner();
                    playAudioRick();
                    return (document.querySelector(".result").innerHTML=result);
                }else if(grid[i][2]==="0"){
                    result="<i>uuugh</i>---Zombelson Zombekowski wins!";
                    zombieWinner();
                    playAudioZombie();
                    return (document.querySelector(".result").innerHTML=result);
                }
            }else if((grid[0][i]=== "X" && grid[1][i]==="X" && grid[2][i]==="X")||
            (grid[0][i]=== "0" && grid[1][i]==="0" && grid[2][i]==="0")){
                if(grid[0][i]==="X"){
                    result="<i>This is how we SURVIVE! </i>---Rick Grimes wins!";
                    rickWinner();
                    playAudioRick();
                    return (document.querySelector(".result").innerHTML=result);
                }else if(grid[0][i]==="0"){
                    result="<i>uuugh</i>---Zombelson Zombekowski wins!";
                    zombieWinner();
                    playAudioZombie();
                    return (document.querySelector(".result").innerHTML=result);
                }
            }else if((grid[0][0]==="X" && grid[1][1]==="X" && grid[2][2]==="X")||
            (grid[0][0]==="0" && grid[1][1]==="0" && grid[2][2]==="0")){
                if(grid[0][0]==="X"){
                    result="<i>This is how we SURVIVE! </i>---Rick Grimes wins!";
                    rickWinner();
                    playAudioRick();
                    return (document.querySelector(".result").innerHTML=result);
                }else if(grid[0][0]==="0"){
                    result="<i>uuugh</i>---Zombelson Zombekowski wins!";
                    zombieWinner();
                    playAudioZombie();
                    return (document.querySelector(".result").innerHTML=result);
                }
            }else if((grid[2][0]==="X" && grid[1][1]==="X" && grid[0][2]==="X")||
            (grid[2][0]==="0" && grid[1][1]==="0" && grid[0][2]==="0")){
                if(grid[2][0]==="X"){
                    result="<i>This is how we SURVIVE! </i>---Rick Grimes wins!";
                    rickWinner();
                    playAudioRick();
                    return (document.querySelector(".result").innerHTML=result);
                }else if(grid[2][0]==="0"){
                    result="<i>uuugh</i>---Zombelson Zombekowski wins!";
                    zombieWinner();
                    playAudioZombie();
                    return (document.querySelector(".result").innerHTML=result);
                }
            }
        }
    }
}

//When Rick is the winner, run below animation
var rickWinner=function(){
    document.querySelector(".image2").animate([
        { transform: 'translateY(0px)' }, 
        { transform: 'translateY(-300px)' }
      ], { 
        duration: 850,
        iterations: 2
      });
}
//when Zombie is the winner, run below animation
var zombieWinner=function(){
    document.querySelector(".image1").animate([
        { transform: 'translateY(0px)' }, 
        { transform: 'translateY(-300px)' }
      ], { 
        duration: 850,
        iterations: 2
      });
}

//sound effects
var x = document.getElementById("song1"); 

function playAudioZombie() { 
    x.play(); 
} 
var y = document.getElementById("song2"); 

function playAudioRick() { 
    y.play(); 
} 
var z = document.getElementById("song3"); 

function playAudioOpening() { 
    z.play(); 
} 
playAudioOpening();

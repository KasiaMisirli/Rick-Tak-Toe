console.log("tic tac toe");

var grid = [
    ["1","2","3"],
    ["5","4","6"],
    ["7","8","9"]
];

var allKeys = document.querySelectorAll(".row div");

var cross =true;
var moves = function(event){
   
    if(cross){
        event.target.classList.add("ex");
        event.target.textContent = "X";
        var pos = event.target.id.split('');
        // console.log(posX[0]);
        grid[+pos[0]][+pos[1]] = "X";

    }else{
        event.target.classList.add("circle");
        event.target.textContent = "0";
        var pos2 =event.target.id.split('');
        grid[+pos2[0]][+pos2[1]] = "0";
    }   
    cross=!cross;
    checkWins();
}

allKeys.forEach(function(item){
    item.addEventListener("click",moves);
    
});

//console.log(document.getElementById("00").innerHTML="kasia");


// document.querySelector(".zero-zero").innerHTML=grid[0][0];
// document.querySelector(".zero-one").innerHTML=grid[0][1];
// document.querySelector(".zero-two").innerHTML=grid[0][2];
// document.querySelector(".one-zero").innerHTML=grid[1][0];
// document.querySelector(".one-one").innerHTML=grid[1][1];
// document.querySelector(".one-two").innerHTML=grid[1][2];
// document.querySelector(".two-zero").innerHTML=grid[2][0];
// document.querySelector(".two-one").innerHTML=grid[2][1];
// document.querySelector(".two-two").innerHTML=grid[2][2];

// grid[0][1] = "X";
// grid[0][2] = "X";
// grid[0][3] = "X";
// grid[0][0] = "0";
// grid[2][0] = "X";
var checkWins = function() {
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[i].length;j++){    
            if(grid[i][0]===grid[i][1] && grid[i][1]===grid[i][2]){
                console.log("The winner is "+grid[i][2]);
            }else if(grid[0][i]===grid[1][i] && grid[1][i]===grid[2][i]){
                console.log("The winner is "+grid[0][i]);
            }else if(grid[0][0]===grid[1][1] && grid[1][1]===grid[2][2]){
                console.log("The winner is "+grid[1][1]);
            }else if(grid[2][0]===grid[1][1] && grid[1][1]===grid[0][2]){
                console.log("The winner is "+grid[2][0]);
            }
        }
    }
}


var result1 = "The winner is "+grid[i][2];
var result2 = "The winner is "+grid[0][i];
var result3 = "The winner is "+grid[1][1];
var result4 = "The winner is "+grid[2][0];






// for(var i=0;i<grid.length;i++){
//     for(var j=0;j<grid[i].length;j++){
       
//         console.log(grid[i][j]);
//     }

// }

// document.addEventListener("click",function(){
//     document.querySelector("t").textContent="X";
// })
//---------------------------------------------------------
// var allKeys = document.querySelectorAll(".main-grid");

// var moves = function(event){
//     event.target.classList.add("ex");

//     event.target.textContent = "X";
// }

// allKeys.forEach(function(item){
//     item.addEventListener("click",moves);
// });


// var allKeys = document.querySelectorAll(".main-grid");

// var moves = function(event){
//     event.target.classList.add("circle");

//     event.target.textContent = "0";
// }

// allKeys.forEach(function(item){
//     item.addEventListener("click",moves);
// });

//-----------------------------------------







// var creatingGrid = function(numberOfRows, numberOfCols){
//     for(var row=0; row < numberOfRows; row++){
//         grid.push("I".repeat(numberOfCols).split(""));
//     }
//     return grid;
// }
// console.log(creatingGrid(3,3));
// var player1 = "X";
// var player2 = "0";



// grid[0][1] = "X";
// grid[1][2] = "0";

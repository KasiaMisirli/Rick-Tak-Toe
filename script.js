console.log("tic tac toe");

var grid = [
    ["1","2","3"],
    ["5","4","6"],
    ["7","8","9"]
];

var allKeys = document.querySelectorAll(".row div");
var result;
var cross =true;

var moves = function(event){
    if(event.target.className === "circle" || event.target.className === "ex" || result!== undefined){
        return;
    }else{
        if(cross==true && event.target.textContent != "X" && event.target.textContent != "0"){
                event.target.classList.add("ex");
                //event.target.textContent = "X";
                var pos = event.target.id.split('');
                grid[+pos[0]][+pos[1]] = "X";
        }else if (cross!== true && event.target.textContent != "X" && event.target.textContent != "0"){
                event.target.classList.add("circle");
                //event.target.textContent = "0";
                var pos2 =event.target.id.split('');
                grid[+pos2[0]][+pos2[1]] = "0";
        }   
        cross=!cross;
        checkWins();
        
    }
} 

allKeys.forEach(function(item){
    item.addEventListener("click",moves);
});


var checkWins = function() {
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[i].length;j++){    
            if((grid[i][0]==="X" && grid[i][1]==="X" && grid[i][2]==="X")||
            (grid[i][0]==="0" && grid[i][1]==="0" && grid[i][2]==="0")){
                if(grid[i][2]==="X"){
                    result="<i>This is how we SURVIVE! </i>---Rick Grimes wins!";
                    rickWinner();
                    document.querySelector(".zombie").audio;
                    return (document.querySelector(".result").innerHTML=result);
                }else if(grid[i][2]==="0"){
                    result="<i>uuugh</i>---Zombelson Zombekowski wins";
                    zombieWinner();
                    //song1();
                    return (document.querySelector(".result").innerHTML=result);
                }
            }else if((grid[0][i]=== "X" && grid[1][i]==="X" && grid[2][i]==="X")||
            (grid[0][i]=== "0" && grid[1][i]==="0" && grid[2][i]==="0")){
                if(grid[0][i]==="X"){
                    result="<i>This is how we SURVIVE! </i>---Rick Grimes wins!";
                    rickWinner();
                    return (document.querySelector(".result").innerHTML=result);
                }else if(grid[0][i]==="0"){
                    result="<i>uuugh</i>---Zombelson Zombekowski wins";
                    zombieWinner();
                    //song1();
                    return (document.querySelector(".result").innerHTML=result);
                }
            }else if((grid[0][0]==="X" && grid[1][1]==="X" && grid[2][2]==="X")||
            (grid[0][0]==="0" && grid[1][1]==="0" && grid[2][2]==="0")){
                if(grid[0][0]==="X"){
                    result="<i>This is how we SURVIVE! </i>---Rick Grimes wins!";
                    rickWinner();
                    return (document.querySelector(".result").innerHTML=result);
                }else if(grid[0][0]==="0"){
                    result="<i>uuugh</i>---Zombelson Zombekowski wins";
                    zombieWinner();
                    return (document.querySelector(".result").innerHTML=result);
                }
            }else if((grid[2][0]==="X" && grid[1][1]==="X" && grid[0][2]==="X")||
            (grid[2][0]==="0" && grid[1][1]==="0" && grid[0][2]==="0")){
                if(grid[2][0]==="X"){
                    result="<i>This is how we SURVIVE! </i>---Rick Grimes wins!";
                    rickWinner();
                    return (document.querySelector(".result").innerHTML=result);
                }else if(grid[2][0]==="0"){
                    result="<i>uuugh</i>---Zombelson Zombekowski wins";
                    zombieWinner();
                    return (document.querySelector(".result").innerHTML=result);
                }
            }
        }
    }
}


var rickWinner=function(){
    document.querySelector(".image2").animate([
        // keyframes
        { transform: 'translateY(0px)' }, 
        { transform: 'translateY(-300px)' }
      ], { 
        // timing options
        duration: 850,
        iterations: 3
      });
}


var zombieWinner=function(){
    document.querySelector(".image1").animate([
        // keyframes
        { transform: 'translateY(0px)' }, 
        { transform: 'translateY(-300px)' }
      ], { 
        // timing options
        duration: 850,
        iterations: 3
      });
}


// var song1 = function(){ 
//     var audio = document.getElementById('song1');
//     audio.src = 
//         'zombie/wav/' + 
//         document.getElementById('song1').getAttribute('data-value');
//     audio.load();
//     audio.play();
// }
// song1();

// var target;
// var song1= function(e) {
//     //e.preventDefault();
  
//     var elm = e.target;
//     var audio = document.getElementById('song1');
  
//     var source = document.getElementById('song1Source');
//     source.src = elm.getAttribute('data-value');
  
//    // audio.load(); //call this to just preload the audio without playing
//     audio.play(); //call this to play the song right away
//   };
//   song1();
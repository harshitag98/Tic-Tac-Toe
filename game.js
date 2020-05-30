var rows = $('table tr');
//var start = $('#start');
var player1Char = 'X';
var player2Char = 'O';
var player1Name = "";
var player2Name = "";

$('#start').on('click',function(){
  player1Name = prompt("Enter the name of first player. This player owns character 'X' for the game.");
  player2Name = prompt("Enter the name of second player. This player owns character 'O' for the game.");
  $('#player').text(player1Name + "'s turn: Click on any cell to input 'X'").css({'display':'block', 'margin': 'auto'});
})

function changeText(row, col, Text){
  rows.eq(row).find('td').eq(col).find('button').text(Text);
}

function returnText(row, col){
  var result = rows.eq(row).find('td').eq(col).find('button').text();
  //console.log("returnText "+result);
  return result;
}

function matchText(one, two, three){
  return (one === two && one === three && one !== '' && two !== '' && three !== '');
}

function horizontallyCheck(){
  console.log("enter horizontllyCheck");
  for(var row=0; row<3; row++){
    if(matchText(returnText(row,0), returnText(row,1), returnText(row,2))){
      return true;
    }else{
      continue;
    }
  }
  console.log("exit horizontallyCheck");
}

function verticallyCheck(){
  console.log("enter verticallyCheck");
  for(var col=0; col<3; col++){
    if(matchText(returnText(0,col), returnText(1,col), returnText(2,col))){
      return true;
    }else{
      continue;
    }
  }
  console.log("exit verticallyCheck");
}

function diagonallyCheck(){
  console.log("entry diagonallyCheck");
  one = returnText(0,0);
  two = returnText(1,1);
  three = returnText(2,2);
  four = returnText(0,2);
  five = returnText(2,0);
  if(matchText(one, two, three) || matchText(four, two, five)){
    return true;
  }else{
    return false;
  }
  console.log("exit diagonallyCheck");
}

function finalDisplay(name){
  $('#h3').css('display','none');
  $('#start').css('display','none');
  $('#h1').text("Congrats!! " + name + " : You won the game.").css({'display':'block', 'margin':'auto'});
  $('#h3').text("If you want to play again, click on the Restart button.").css({'display':'block', 'margin':'auto'});
  $('#restart').css({'display':'block', 'margin':'auto'});
  $('#player').css('display','none');
  player = 1;
  playerName = player1Name;
  playerText = player1Char;
}

$('#restart').on('click', function(){
  $('#h1').css('display','none');
  $('#h3').text("Let's get started !! Click on the Start button to start the game");
  $('#start').css({'display':'block', 'margin': 'auto'});
  for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
      changeText(i, j, "")
    }
  }
  $('#restart').css('display','none');
})


var player = 1;
var playerName = player1Name;
var playerText = player1Char;
$('.board button').on('click', function(){
  var col = $(this).closest('td').index();
  var row = $(this).closest('tr').index();
  changeText(row, col, playerText);

  if(horizontallyCheck() || verticallyCheck() || diagonallyCheck()){
    finalDisplay(playerName);
    return;
  }

  player = player * -1;
  if(player === 1){
    playerName = player1Name;
    playerText = player1Char;
    $('#player').text(playerName + "'s turn: Click on any cell to input 'X'");
  }
  else{
    playerName = player2Name;
    playerText = player2Char;
    $('#player').text(playerName + "'s turn: Click on any cell to input 'O'");
  }
})

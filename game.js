var rows = $('table tr');
//var start = $('#start');
var player1Char = 'X';
var player2Char = 'O';
var player1Name = "";
var player2Name = "";

$('#start').on('click',function(){
  player1Name = prompt("Enter the name of first player. This player owns character 'X' for the game.");
  player2Name = prompt("Enter the name of second player. This player owns character 'O' for the game.");
  $('#player').text(player1Name + "'s turn: Click on any cell to input 'X'");
})

function changeText(row, col, Text){
  rows.eq(row).find('td').eq(col).find('button').text(Text);
}

function returnText(rwo, col){
  return rows.eq(row).find('td').eq(col).find('button').text;
}

function matchText(one, two, three){
  return (one === two && one === three && one !== "" && one !== undefined);
}

function horizontallyCheck(){
  for(var row=0; row<3; row++){
    one = returnText(row,0);
    two = returnText(row,1);
    three = returnText(row,2);
    if(matchText(one,two,three)){
      return true;
    }else{
      return false;
    }
  }
}

function verticallyCheck(){
  for(var col=0; col<3; col++){
    one = returnText(0,col);
    two = returnText(1,col);
    three = returnText(2,col);
    if(matchText(one,two,three)){
      return true;
    }else{
      return false;
    }
  }
}

function diagonallyCheck(){
  one = returnText(0,0);
  two = returnText(1,1);
  three = returnText(2,2);
  four = returnText(0,3);
  five = returnText(2,0);
  if(matchText(one, two, three) || matchText(four, two, five)){
    return true;
  }else{
    return false;
  }
}

function finalDisplay(name){
  
}

var player = 1;
var playerName = player1Name;
var playerText = player1Char;
$('.board button').on('click', function(){
  var col = $(this).closest('td').index();
  var row = $(this).closest('tr').index();
  changeText(row, col, playerText);
  if(horizontallyCheck() || verticallyCheck() || diagonallyCheck()){
    finalDisplay(playerName);
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

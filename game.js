var squares = document.querySelectorAll('td');
var restart = document.querySelector('button');

function clearBoard(){
  for(var i=0; i<squares.length; i++){
    squares[i].textContent="";
  }
}

restart.addEventListener('click',clearBoard)

function changeCharacter() {
  if(this.textContent== "") {
    this.textContent="X";
  }
  else if (this.textContent=="X") {
    this.textContent="O"
  }
  else {
    this.textContent=""
  }
}

for(var i=0; i<squares.length;i++){
  squares[i].addEventListener('click',changeCharacter)
}

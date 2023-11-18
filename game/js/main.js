// Inserting the Images
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText}<img class='allimg allpawn' src="img/${image.innerText}.png" alt="">`;
                image.style.cursor = 'pointer';

            }

            else {

                image.innerHTML = `${image.innerText}<img class='allimg' src="img/${image.innerText}.png" alt="">`;
                image.style.cursor = 'pointer';
            }
        }
    })
}
insertImage();

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(square => {

        getId = square.id;
        arr = Array.from(getId);
        arr.shift();
        file = eval(arr.pop());
        rank = eval(arr.shift());
        a = file + rank;

        if (a % 2 == 0) {
            square.style.backgroundColor = 'rgb(200, 201,200)';
        }
        if (a % 2 !== 0) {
            square.style.backgroundColor = 'rgb(110, 75, 43)';
        }
    })
}
coloring();

move=1;
document.querySelectorAll('.box').forEach(piece=>{
    piece.addEventListener('click',function(){

        getId = piece.id;
        arr = Array.from(getId);
        arr.shift();
        file = eval(arr.pop());
        
        arr.push('0');        
        rank = eval(arr.join(''));
        a = file + rank;

        if (move % 2 !== 0) {
            document.getElementById('move').innerText = "White's Turn"
            whosTurn('W');
        }
        if (move % 2 == 0) {
            document.getElementById('move').innerText = "Black's Turn"
            whosTurn('B')
        }

        function whosTurn(turn){

            //Pawn
            
            if(piece.innerText==`${turn}pawn`){
                piece.style.backgroundColor='pink';
                

                if(move%2!=0 && rank<800){
                    if(rank==200 && document.getElementById(`b${a+100}`).innerText.length==0){
                        document.getElementById(`b${a+100}`).style.backgroundColor='green';
                        if(rank==200 && document.getElementById(`b${a+200}`).innerText.length==0){
                            document.getElementById(`b${a+200}`).style.backgroundColor='green';
                        }
                    }

                    if(rank!=200 && document.getElementById(`b${a+100}`).innerText.length==0){
                        document.getElementById(`b${a+100}`).style.backgroundColor='green';
                    }

                    if (file < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (file > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                    }

                }

                if(move%2==0 && rank>100){
                    if(rank==700 && document.getElementById(`b${a-100}`).innerText.length==0){
                        document.getElementById(`b${a-100}`).style.backgroundColor='green';
                        if(rank==200 && document.getElementById(`b${a-200}`).innerText.length==0){
                            document.getElementById(`b${a-200}`).style.backgroundColor='green';
                        }
                    }

                    if(rank!=700 && document.getElementById(`b${a-100}`).innerText.length==0){
                        document.getElementById(`b${a-100}`).style.backgroundColor='green';
                    }

                    if (file < 8 && document.getElementById(`b${a-100+1}`).innerText.length !== 0) {
                        document.getElementById(`b${a-100+1}`).style.backgroundColor = 'green'
                    }

                    if (file > 1 && document.getElementById(`b${a-100-1}`).innerText.length !== 0) {
                        document.getElementById(`b${a-100-1}`).style.backgroundColor = 'green'
                    }

                }
            }

            //King

            
        }
    })
})

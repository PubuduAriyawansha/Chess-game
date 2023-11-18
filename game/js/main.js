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

//board coloring
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

//avoid capturing same plaeyr pieces
function avoidCapture(){
    document.querySelectorAll('.box').forEach(piece =>{
        if(piece.style.backgroundColor=='pink'){
            document.querySelectorAll('.box').forEach(square=>{
                if(square.style.backgroundColor=='green'&& square.innerText.length!=0){
                    MypieceName=piece.innerText;
                    otherPieceName=square.innerText;

                    MyPieceColor=((Array.from(MypieceName)).shift()).toString();
                    OtherPieceColor= ((Array.from(otherPieceName)).shift()).toString();
                    console.log(otherPieceName);
                    if(MyPieceColor===OtherPieceColor){
                        square.style.backgroundColor='red';
                    }
                }
            })
        }
    })
}


//Pieces moving patterns
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
                        if(rank==700 && document.getElementById(`b${a-200}`).innerText.length==0){
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

            if(piece.innerText==`${turn}king`){
                piece.style.backgroundColor = 'pink';

                if(file<8){
                    document.getElementById(`b${a+1}`).style.backgroundColor='green';
                }
                if(file>1){
                    document.getElementById(`b${a-1}`).style.backgroundColor='green';
                }
                if(rank<800){
                    document.getElementById(`b${a+100}`).style.backgroundColor='green';
                }
                if(rank>100){
                    document.getElementById(`b${a-100}`).style.backgroundColor='green';
                }
                if(rank<800 && file>1){
                    document.getElementById(`b${a+100-1}`).style.backgroundColor='green';
                }
                if(rank<800 && file<8){
                    document.getElementById(`b${a+100+1}`).style.backgroundColor='green';
                }
                if(rank>100 && file>1){
                    document.getElementById(`b${a-100-1}`).style.backgroundColor='green';
                }
                if(rank>100 && file<8){
                    document.getElementById(`b${a-100+1}`).style.backgroundColor='green';
                }
            }

            //Rook

            if(piece.innerText==`${turn}rook`){
                piece.style.backgroundColor = 'pink';

                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }   
                }
                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) >100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if ((a + i ) < (rank+9) && document.getElementById(`b${a + i }`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }else if ((a + i ) < (rank+9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if ((a - i ) > (rank) && document.getElementById(`b${a - i }`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }else if ((a - i ) > (rank) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

            }

            //Bishop

            if(piece.innerText==`${turn}bishop`){
                piece.style.backgroundColor = 'pink';

                for (let i = 1; i < 9; i++) {
                    if (i < (900 - rank) / 100 && i < 9 - file && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }else if (i < (900 - rank) / 100 && i < 9 - file && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - rank) / 100 && 0 < file - i && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }else if (i < (900 - rank) / 100 && 0 < file - i&& document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < rank / 100 && i < 9 - file && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }else if (i < rank / 100 && i < 9 - file && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < rank/ 100 && 0 < file - i && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }else if (i<rank / 100 && 0 < file - i&& document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

            }

            //Queen

            if(piece.innerText==`${turn}queen`){
                piece.style.backgroundColor='pink';

                for (let i = 1; i < 9; i++) {
                    if (i < (900 - rank) / 100 && i < 9 - file && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }else if (i < (900 - rank) / 100 && i < 9 - file && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - rank) / 100 && 0 < file - i && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }else if (i < (900 - rank) / 100 && 0 < file - i&& document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < rank / 100 && i < 9 - file && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }else if (i < rank / 100 && i < 9 - file && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < rank/ 100 && 0 < file - i && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }else if (i<rank / 100 && 0 < file - i&& document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }   
                }
                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) >100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if ((a + i ) < (rank+9) && document.getElementById(`b${a + i }`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }else if ((a + i ) < (rank+9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if ((a - i ) > (rank) && document.getElementById(`b${a - i }`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }else if ((a - i ) > (rank) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }
            }

            //Knight

            if(piece.innerText==`${turn}knight`){
                piece.style.backgroundColor='pink';

                if (file < 7 && rank < 800) {
                    document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
                }
                if (file > 2 && rank < 800) {
                    document.getElementById(`b${a + 100 - 2}`).style.backgroundColor = 'green'
                }
                if (file < 7 && rank > 100) {
                    document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green'
                }
                if (file > 2 && rank > 100) {
                    document.getElementById(`b${a - 100 - 2}`).style.backgroundColor = 'green'
                }
                if (file < 8 && rank < 700) {
                    document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
                }
                if (file > 1 && rank < 700) {
                    document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green'
                }
                if (file < 8 && rank > 200) {
                    document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
                }
                if (file > 1 && rank > 200) {
                    document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'
                }
            }
            

        }
        avoidCapture();
        
    })
});


//Pieces movement
document.querySelectorAll('.box').forEach(piece=>{
    piece.addEventListener('click',()=>{
        if(piece.style.backgroundColor=='pink'){
            pieceSquare=piece.id;
            pieceName=piece.innerText;

            document.querySelectorAll('.box').forEach(square=>{
                square.addEventListener('click',()=>{
                
                    squareID=square.id;
                    arr=Array.from(squareID);
                    arr.shift();
                    file=eval(arr.pop());
                    arr.push('0');
                    rank=eval(arr.join(''))
                    a=rank+file;

                    if(square.style.backgroundColor=='green' ){
                        if(pieceName=='Wpawn' && rank==800){
                            document.getElementById(`b${a}`).innerText='Wqueen';
                            document.getElementById(pieceSquare).innerText='';
                            coloring();
                            insertImage();
                        }
                        else if(pieceName=='Bpawn' && rank==100){
                            document.getElementById(`b${a}`).innerText='Bqueen';
                            document.getElementById(pieceSquare).innerText='';
                            coloring();
                            insertImage();
                        }
                        else{
                            document.getElementById(pieceSquare).innerText='';                           
                            square.innerText=pieceName;                            
                            coloring();
                            insertImage();
                        }
                        move+=1;
                    }
                    
                })
            })
        }
    })
});

//avoid selecting move pieces
count =0;
document.querySelectorAll('.box').forEach(e=>{
    e.addEventListener('click',()=>{
        count+=1;
        if(count%2==0 && e.style.backgroundColor!='green'){
            coloring();
        }
    })
});






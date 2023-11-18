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
                    if(MyPieceColor===OtherPieceColor){
                        square.style.backgroundColor='red';
                    }
                }
            })
        }
    })
}

function labelText(){
    if (move % 2 !== 0) {
        document.getElementById('move').innerText = "White's Turn" ;      
    }
    if (move % 2 == 0) {
        document.getElementById('move').innerText = "Black's Turn";        
    }
}

//Pieces moving patterns
move=1;
whiteCastleChance=true;
blackCastleChance=true;
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


                if(whiteCastleChance==true && a==105 && document.getElementById('b106').innerText== '' && document.getElementById('b107').innerText== '' && document.getElementById('b108').innerText== 'Wrook'){
                    document.getElementById(`b107`).style.backgroundColor = 'purple';
                }
                if(whiteCastleChance==true && a==105 && document.getElementById('b104').innerText== '' && document.getElementById('b103').innerText== '' && document.getElementById('b102').innerText== '' && document.getElementById('b101').innerText== 'Wrook'){
                    document.getElementById(`b103`).style.backgroundColor = 'purple';
                }
                if(blackCastleChance==true && a==805 && document.getElementById('b806').innerText== '' && document.getElementById('b807').innerText== '' && document.getElementById('b808').innerText== 'Brook'){
                    document.getElementById(`b807`).style.backgroundColor = 'purple';
                }
                if(blackCastleChance==true && a==805 && document.getElementById('b804').innerText== '' && document.getElementById('b803').innerText== '' && document.getElementById('b802').innerText== '' && document.getElementById('b801').innerText== 'Brook'){
                    document.getElementById(`b803`).style.backgroundColor = 'purple';
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

                    console.log(square.style.backgroundColor);

                    //error
                    if((square.style.backgroundColor=='rgb(200, 201, 200)'||square.style.backgroundColor=='rgb(110, 75, 43)') && square.innerText.length==0){
                        console.log('object');
                        if(square.id=='b103'){
                            document.getElementById('b101').innerText='';
                            document.getElementById('b103').innerText='Wking';
                            document.getElementById('b104').innerText='Wrook';
                            document.getElementById('b105').innerText='';
                            whiteCastleChance=false;
                        }
                        else if(square.id=='b107'){
                            document.getElementById('b108').innerText='';
                            document.getElementById('b107').innerText='Wking';
                            document.getElementById('b106').innerText='Wrook';
                            document.getElementById('b105').innerText='';
                            whiteCastleChance=false;
                        }
                        else if(square.id=='b803'){
                            document.getElementById('b801').innerText='';
                            document.getElementById('b803').innerText='Bking';
                            document.getElementById('b804').innerText='Brook';
                            document.getElementById('b805').innerText='';
                            blackCastleChance=false;
                        }
                        else if(square.id=='b807'){
                            document.getElementById('b808').innerText='';
                            document.getElementById('b807').innerText='Bking';
                            document.getElementById('b806').innerText='Brook';
                            document.getElementById('b805').innerText='';
                            blackCastleChance=false;
                        }

                        coloring();
                        insertImage();
                        move+=1;
                    }

                    if(square.style.backgroundColor=='green' ){
                        if(pieceName=='Wpawn' && rank==800){
                            document.getElementById(`b${a}`).innerText='Wqueen';
                            document.getElementById(pieceSquare).innerText='';
                            
                        }
                        else if(pieceName=='Bpawn' && rank==100){
                            document.getElementById(`b${a}`).innerText='Bqueen';
                            document.getElementById(pieceSquare).innerText='';
                            
                        }
                        else{
                            document.getElementById(pieceSquare).innerText='';                           
                            square.innerText=pieceName;                            
                            
                        }
                        coloring();
                        insertImage();
                        move+=1;
                    }
                    
                    labelText();
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






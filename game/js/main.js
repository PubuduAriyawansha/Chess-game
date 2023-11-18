// Inserting the Images
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `<img class='allimg allpawn' src="img/${image.innerText}.png" alt="">`;
                image.style.cursor = 'pointer';

            }

            else {

                image.innerHTML = `<img class='allimg' src="img/${image.innerText}.png" alt="">`;
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
    piece.addEventListener('click',()=>{

        getId = piece.id;
        arr = Array.from(getId);
        arr.shift();
        file = eval(arr.pop());
        
        arr.push('0');        
        rank = eval(arr.join(''));
        a = file + rank;

        if (move % 2 !== 0) {
            document.getElementById('move').innerText = "White's Turn"
            whosTurn('W')
        }
        if (move % 2 == 0) {
            document.getElementById('move').innerText = "Black's Turn"
            whosTurn('B')
        }

        function whosTurn(turn){

        }

    })
})

function chessBoard() {
    /*let figures= {
        0:['Лч','Кч','Сч','Кч','Кч','Сч','Кч','Лч'],
        1:['Пч','Пч','Пч','Пч','Пч','Пч','Пч','Пч'],
        6:['Пб','Пб','Пб','Пб','Пб','Пб','Пб','Пб'],
        7:['Лб','Кб','Сб','Кб','Кб','Сб','Кб','Лб'],
    };*/

    let figures = {
        0:['b_Rook.svg','b_Knight.svg','b_Bishop.svg','b_Queen.svg','b_King.svg','b_Bishop.svg','b_Knight.svg','b_Rook.svg'],
        1:['b_Pawn.svg','b_Pawn.svg','b_Pawn.svg','b_Pawn.svg','b_Pawn.svg','b_Pawn.svg','b_Pawn.svg','b_Pawn.svg'],
        6:['w_Pawn.svg','w_Pawn.svg','w_Pawn.svg','w_Pawn.svg','w_Pawn.svg','w_Pawn.svg','w_Pawn.svg','w_Pawn.svg'],
        7:['w_Rook.svg','w_Knight.svg','w_Bishop.svg','w_Queen.svg','w_King.svg','w_Bishop.svg','w_Knight.svg','w_Rook.svg'],
    };
    
    var figureIcon, dl, dr;
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for (var i = 0; i < 8; i++) {
        dl = document.createElement("div");
        dr = document.createElement("div");

        dl.innerText = 8-i;
        dr.innerText = 8-i;
        document.getElementById('digits-left').appendChild(dl);
        document.getElementById('digits-right').appendChild(dr);

        for (var j = 0; j < 8; j++) {
         
            var chessSquare = document.createElement("div");
            chessSquare.className = 'square';
           
            if (figures[i] != undefined) {
                //chessSquare.innerText = figures[i][j];
                figureIcon = document.createElement("img");
                figureIcon.src = "./img/"+figures[i][j];
                chessSquare.appendChild(figureIcon)
            }

            document.getElementById('desk').appendChild(chessSquare);
            
            
            if (i % 2 != 0 && j % 2 != 0) {
                chessSquare.style.backgroundColor = 'rgb(65, 64, 54)';
            }

            if (i % 2 == 0 && j % 2 == 0) {
                chessSquare.style.backgroundColor = 'rgb(65, 64, 54)';
            }
            
        }
    }
}

chessBoard();

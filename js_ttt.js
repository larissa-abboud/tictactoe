window.onload=() => {
    /**
     * onclick adds an img
     * flag to show which player
     * even= x
     * odd =o
     * loop of 9 
     * 
     */
     let game_status = ["", "", "", "", "", "", "", "", ""];
     let currentP_layer = "X";

     // wins if 
     /**
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
      */
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click", clickedHandler));
     
    clickedHandler(e){
        const clicked = e.target;
        const cell_index = parseInt(clicked.getAttribute('cell_index'));
        
        clickedCell.innerHTML = currentPlayer;
        if( currentPlayer == 'X'){
            currentPlayer = 'O';
        }else{
            currentPlayer = 'X';
        }

    }
}
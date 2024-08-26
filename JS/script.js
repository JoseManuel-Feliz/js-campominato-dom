console.log('JS OK')

/* 
1. Recuperare gli elementi d'intresse dal DOM 
    1.b recupero l'emento dal DOM dove inserirò il punteggio contatore del punteggio

2. creare una funzione per generare le celle

3. Generare il nr di celle desiderate usando un ciclo for e la funzione creata in precedenza
 ed inserirle al interno del elemento recuperato dal DOM 

4. inserire all'interno delle celle il suo numero 
    corrispondente che vanno i ordine dal 1 al 100

5.  Creare un evento che al click aggiunga in console il numero 
    della cella cliccata eppure cambi il background della cella. 

*/


/* Fase di preparazione */

//1. Recuperare gli elementi d'intresse dal DOM 

const grid = document.getElementById('grid');
const Submit = document.getElementById('Play-btn');
const chooseLevel = document.getElementById('Difficulty')
const gameLevel = document.getElementById('pratofiorito')

//1.b recupero l'emento dal DOM dove inserirò il punteggio contatore del punteggio
const pointsCounter = document.getElementById('score-counter')

//2. creare una funzione per generare le celle

function generateCell(content) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(content)
    return cell;
}

//creo una funzione per generare dei nr casuali alle bombe
function generateBombs(totCells, totalBombs) {
    //array delle bombe
    const bombs = [];

    //ciclo per generare un nr casuale a ciascuna bomba
    while (bombs.length < totalBombs) {
        const randomNumbers = Math.floor(Math.random() * totCells) + 1;

        /*condizione che verifica se il nr al interno del array bombe non sia stato ripetuto 
        e in tal caso ne impedisce la repetizione*/
        if (!bombs.includes(randomNumbers)) bombs.push(randomNumbers);
    }
    console.log(bombs)
    return bombs
}
/* Fase di Elaborazione */

/* 3. Generare il nr di celle desiderate usando un ciclo for e la funzione creata in precedenza
ed inserirle al interno del elemento recuperato dal DOM */
gameLevel.addEventListener('submit', function (event) {
    event.preventDefault()

    grid.innerHTML = '';
    let rows;
    let col;
    //creo una variabile per tener conto del punteggio
    let score = 0;

    //creo una variabile con il nr tottale di bombe
    const totalBombs = 16;



    /* condizione che cambia il numero delle celle al cambio del livello di difficolta */
    switch (chooseLevel.value) {
        case "easy":
            rows = 10;
            col = 10;
            break;

        case "normal":
            rows = 9;
            col = 9
            break;
        case "hard":
            rows = 7;
            col = 7;
            break;
    }

    const totCells = rows * col;
    console.log(chooseLevel.value)

    //genero il nr di bombe desiderato con la funzione
    const bombs = generateBombs(totCells, totalBombs)

    for (let i = 1; i <= totCells; i++) {

        /* 4. inserire all'interno delle celle il suo numero 
        corrispondente che vanno i ordine dal 1 al 100 */
        const cell = generateCell(i);
        console
        /* classe che cambia il nr dell celle in base al livello di difficolta */
        cell.classList.add(chooseLevel.value)


        /*  5.  Creare un evento che al click aggiunga in console il numero 
        della cella cliccata eppure cambi il background della cella. 
        */
        cell.addEventListener('click', function () {

            /*condizione che impedisce al di incrementare 
            il punteggio se la casella è stata gia cliccata*/
            if (cell.classList.contains('clicked')) return;

            cell.classList.add('clicked');
            console.log(cell.innerText)
            //incremento il punteggio ogni click
            pointsCounter.innerText = ++score;
            console.log(score)
        })

        grid.appendChild(cell)
    }

})

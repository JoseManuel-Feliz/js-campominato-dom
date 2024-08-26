console.log('JS OK')

/* 
1. Recuperare gli elementi d'intresse dal DOM 
    1b. Creo le variabile per creare il nr di righe e colonne desiderate 


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

//1b. Creo le variabile per creare il nr di righe e colonne desiderate

//2. creare una funzione per generare le celle

function generateCell(content) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(content)
    return cell;
}

/* Fase di Elaborazione */

/* 3. Generare il nr di celle desiderate usando un ciclo for e la funzione creata in precedenza
ed inserirle al interno del elemento recuperato dal DOM */
gameLevel.addEventListener('submit', function (event) {
    event.preventDefault()

    grid.innerHTML = ''
    let rows;
    let col;

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

    for (let i = 1; i <= totCells; i++) {

        /* 4. inserire all'interno delle celle il suo numero 
        corrispondente che vanno i ordine dal 1 al 100 */
        const cell = generateCell(i);

        /* classe che cambia il nr dell celle in base al livello di difficolta */
        cell.classList.add(chooseLevel.value)


        /*  5.  Creare un evento che al click aggiunga in console il numero 
        della cella cliccata eppure cambi il background della cella. 
        */
        cell.addEventListener('click', function () {
            cell.classList.add('clicked');
            console.log(cell.innerText)
        })

        grid.appendChild(cell)
    }

})

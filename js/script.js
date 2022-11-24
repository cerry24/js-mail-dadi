// gioco dei dadi

const buttonStart = document.getElementById ('btn-gioca');

buttonStart.addEventListener ('click', function() {
    const userNumber = Math.floor (Math.random() * 6 + 1);
    const npcNumber = Math.floor (Math.random() * 6 + 1);

    if ( userNumber > npcNumber ) {
        document.getElementById('risultato').innerHTML = `Il tuo numero &egrave; ${userNumber} il mio &egrave; ${npcNumber} quindi hai vinto`;
    } else if ( userNumber < npcNumber ) {
        document.getElementById('risultato').innerHTML = `Il tuo numero &egrave; ${userNumber} il mio &egrave; ${npcNumber} quindi ho vinto io`;

    } else {
        document.getElementById('risultato').innerHTML = `Il tuo numero &egrave; ${userNumber} il mio &egrave; ${npcNumber} quindi &egrave; un pareggio`;
    }
} )
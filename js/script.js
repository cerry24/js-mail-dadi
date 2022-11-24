// gioco dei dadi

const buttonStart = document.getElementById ('btn-play');

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




// verifica email

const mailList = [
    'giggino@gmail.com',
    'carletto45@gmail.com',
    'soincredibbbile@libero.it',
    'bomber8789@hotmail.net',
    'nonhofantasiaperinventareindirizziemail@gmail.com'
]

const buttonVerify = document.getElementById ('btn-verify');

buttonVerify.addEventListener ('click', function() {

    const userMail = document.getElementById ('mail').value;

    let found = false;

    for ( i = 0; i < mailList.length; i++) {

        if ( userMail == mailList[i] ) {
            found = true;
        }
    }

    if ( found ) {
        document.getElementById('output').innerHTML = 'L\'indirizzo email immesso corrisponde';
    } else {
        document.getElementById('output').innerHTML = 'L\'indirizzo email immesso non corrisponde';
    }
} )
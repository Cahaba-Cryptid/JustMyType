let keyboardUpper = $('#keyboard-upper-container');
let keyboardLower = $('#keyboard-lower-container');
//initially hides the uppercase keyboard
$('#keyboard-upper-container').hide();
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
//I need a way to track current sentence and current letter.
let sentenceIndexStart = 0
let letterIndexStart = 0
let trackSentence = sentences[sentenceIndexStart];
let trackLetter = trackSentence.charAt(letterIndexStart);


$('body').keydown(function (e) {
    if (e.which === 16) {
        keyboardUpper.show();
        keyboardLower.hide();
    }
});

$('body').keyup(function (e) {
    if (e.which === 16) {
        keyboardUpper.hide();
        keyboardLower.show();
    }
});

$('body').keypress(function (e) {
    let keyIdent = $('#' + e.which);
    $(keyIdent).css('background-color', 'RosyBrown');
    $('body').keyup(function () {
        $(keyIdent).css('background-color', '#f5f5f5');
    });
});

$('#sentence').text(trackSentence);
$('#target-letter').text(trackLetter);

$('body').keypress()
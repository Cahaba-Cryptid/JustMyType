let keyboardUpper = $('#keyboard-upper-container');
let keyboardLower = $('#keyboard-lower-container');
//initially hides the uppercase keyboard
$('#keyboard-upper-container').hide();

$('body').keydown(function(e) {
    if (e.which === 16) {
        keyboardUpper.show();
        keyboardLower.hide();
    }
});

$('body').keyup(function(e) {
    if (e.which === 16) {
        keyboardUpper.hide();
        keyboardLower.show();
    }
});

$('body').keypress(function(e) {
    let keyIdent = $('#' + e.which);
    $(keyIdent).css('background-color', 'RosyBrown');
}); 

$('body').keyup(function(e) {
    let keyIdent = $('#' + e.which);
    $(keyIdent).css('background-color', '#f5f5f5');
}); 
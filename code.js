$(document).ready(function() {
    var enterPressed = 0;
    var c;
    var start;
    var lastTime;
    var avarage;
    var letter = 13;
    var allTime = 0;
    var i = 0;


    function makeChar()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        text = possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }


    $(document).keypress(function(e) {
        var d = new Date();
        var n = d.getTime(); // return the number of milliseconds since 1970/01/01:
        c = (String.fromCharCode(e.which)).toUpperCase(); // converting our pressed key to string, and making it upper case

        if ((e.which == 13) && (enterPressed == 0)) { // enter pressed for the first time, starting the program
            enterpressed = 1;
            start = n;
            letter = makeChar(); // generating our first random letter

        }
        else if (c == letter) {
            i++; // counting how much times we typed in the correct letter
            lastTime = n - start;
            allTime = allTime + lastTime;
            avarage = allTime / i;
            letter = makeChar(); // generating new letter
            start = n;

            
        }

            $("h1").text(letter);
            $(".last").text((Math.round((lastTime / 1000) * 1000) / 1000) + " sec");
            $(".avarage").text((Math.round((avarage / 1000) * 1000) / 1000) + " sec/hit");


    });




});
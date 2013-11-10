$(document).ready(function() {
    var pressed;
    var num = '';
    var num1 = '';
    var numLast = '';
    var operation;
    var done=0;
    $("td").on("click", function() {
        pressed = ($(this).text());
        if (done===1){
            $("input").val('');
        }
        
        done=0;
        
        if ($.isNumeric(pressed)) {
            num = $("input").val();

            $("input").val(num + pressed);
            numLast = $("input").val();
        }

        if (pressed === "Clear") {
            $("input").val('');
            num = '';
            num1 = '';
            numLast = '';
        }

        if (numLast !== '')
        {
            if ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/")) {
                num1 = numLast;
                numLast = '';
                $("input").val('');
               operation=pressed;
            }

            if ((num1 !== '') && (numLast !== ''))
            {
                if (pressed === "=") {
                    switch (operation)
                    {
                        case "+":
                            $("input").val(+num1 + +numLast);
                            break;
                        case "-":
                            $("input").val(+num1 - +numLast);
                            break;
                        case "*":
                            $("input").val(+num1 * +numLast);
                            break;
                        case "/":
                            $("input").val(+num1 / +numLast);
                            break;
                    }
                    num = '';
                    num1 = '';
                    numLast = '';
                    done=1;
                    operation='';
                }
            }
        }
    });
});


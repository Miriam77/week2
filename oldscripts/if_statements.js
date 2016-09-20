
if (5 != 5){
    console.log ("something")
}


//Challenge:
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 500;
var debt = 300;
var difference =  bankAccount - debt;

if (bankAccount <= debt) {
    console.log ("You are screwed " + difference);
}
    else {
        console.log ("in the clear " + difference);

    }
    


// Daan Masson. Dit is de pizza calculator
var pizzaSmall = prompt("Hoeveel Small pizza's wil je?"); //dit vraagt aantal Small pizza's
var prijsSmall = 4.95; //variabele voor Small prijs
document.write("Totaal Small pizza's: ", pizzaSmall, " €", pizzaSmall*prijsSmall,"<br/>"); //rekent de prijs van totaal Small pizza's uit


var pizzaMedium = prompt("Hoeveel Medium pizza's wil je?"); //dit vraagt aantal Medium pizza's
var prijsMedium = 6.95; //variabele voor Medium prijs
document.write("Totaal Medium pizza's: ", pizzaMedium, " €", pizzaMedium*prijsMedium,"<br/>"); //rekent de  prijs van totaal Medium pizza's uit


var pizzaLarge = prompt("Hoeveel Large pizza's wil je?"); //dit vraagt aantal Large pizza's
var prijsLarge = 8.50; //variabele voor Large prijs
document.write("Totaal Large pizza's: ", pizzaLarge, " €", pizzaLarge*prijsLarge.toFixed(2), "<br/>"); //rekent de prijs van totaal Large pizza's uit


var totaalSmall = pizzaSmall*prijsSmall; //|
var totaalMedium = pizzaMedium*prijsMedium; //|> dit maakt de totaalprijs van elke grootte een variabele
var totaalLarge = pizzaLarge*prijsLarge; //|

document.write("<br/>")

document.write("Eindtotaal: €",totaalSmall+totaalMedium+totaalLarge); //hier word de totaalprijs uitgerekend en laten zien

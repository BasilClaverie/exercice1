Exercice 1 - Fonction variadique

Transformer la fonction adder pour qu'elle accepte un nombre variable d'argument tel que:

adder()(0); // 0
adder()(1); // 0
adder(mult(2))(1); // 2
adder(mult(2), mult(2))(1); // 4
adder(mult(2), mult(2), mult(2))(1); // 6
adder(mult(2), sub(2), mult(2))(1); // 5

Vous utiliserez:

var args = Array.prototype.slice.call(arguments);
[1,2,3].forEach(function(val){console.log(val);});

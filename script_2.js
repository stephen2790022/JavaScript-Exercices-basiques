
function fact(nbr){
    var i, nbr, f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f *= i;   // ou f  i;
    }  
    return f;
  }

  
  let number = prompt("Entre un chiffre dont tu veux la factoriel")
  console.log(`Le resultat du nombre ${number} est: ${fact(number)}`);
function sommenombrespremiers(valeur1, valeur2){
    if(valeur1 < 2 || valeur2 < 2)
    return false;
    else if(valeur1 == 2 && valeur2 == 2)
        return valeur1 + valeur2
    else if(valeur1 == 2)
        for(var i = 2; i < valeur2; i++)
            if(valeur2%i === 0)
                return false;
            else
                return valeur1 + valeur2;
    else if(valeur2 == 2)
        for(var i = 2; i < valeur1; i++)
            if(valeur1%i === 0)
                return false;
            else
                return valeur1 + valeur2;
    else
        for(var i = 2; i < valeur1 && i < valeur2; i++)
            if(valeur1%i === 0 || valeur2%i === 0)
                return false;
            else
                return valeur1 + valeur2;
  }
  
  alert(sommenombrespremiers(29, 7));
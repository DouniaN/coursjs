
//Exercice if 
let douleur = prompt("Bonjour ou avez vous mal monsieur !");
if(douleur =="Abdomen"){
 alert("Apendicite")
}
if(douleur=="Gorge"){
let fievre=prompt("Avez vous de fievre !");
 if(fievre=="Oui"){
    alert("Rhume");
 }
 else if(fievre=="Non"){
    alert("Mal de gorge");
 } 
}

if(douleur!="Abdomen"){
    let toux=prompt("Avez vous du la Toux ??").toLowerCase();
    if(toux=="oui"){
        let fievre =prompt("Avez vous de fievre ??");
        if(fievre=="oui"){
            alert("Monsieur vous avez du Rhume");
        }
        else if(fievre=="non"){
            alert("Refroidissement");
        }
    }
    else{
        alert("Rien");
    }
}

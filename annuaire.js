const annuaire =[

    {Nom :"Hach" ,Prenom:"A",Tel:"06666666"},
    {Nom :"DN" ,Prenom:"A2",Tel:"075677333"},
    {Nom :"MN" ,Prenom:"A3",Tel:"0644444"}
]

let answer = prompt(
    "Qu'est ce que vous voulez ??"
).toLocaleLowerCase();

if(answer ==="quiter" || answer ==="q"){
   window.close();
}
if (answer==="rechercher" || answer==="r"){
    search = prompt("Entrer un nom !")
    let type_An = isNaN(Number(serch));

}




       
      /*for (let i =1;i<=199; i++){
        document.write(i+'<br/>');
        if(i%3==0 && i%5!=0){
            console.log("coucou !<br/>");
        }
        if(i%5==0 && i%3!=0){
            console.log("hello <br/>");
        }
        if(i%3==0 && i%5==0){
            console.log("couco hello <br/>");
        }

      } 

      let maVariableNull = null;
      let mavaribleIndefinde ;

      console.log(typeof(mavaribleIndefinde));
      console.log(typeof(maVariableNull));*/
   /*********************************************Fonctions************************************************************** */

   /*function afficherDeuxValeurs(param1) {
      return param1 ;
   }

   const reponseFonc =(param1) => {return param1;}


   function somme(number1=0 , number2=0 ,number3=0){
    return number1+number2+number3;
   }*/

   const somme = (number1=0 , number2=0 ,number3=0)=>{
    //if(isNaN(number1) && isNaN(number2) && isNaN(number3))
      return number1 + number2 + number3;
   }
   console.log(somme( 8 , 3 ));

   /************************************************************************************* */
   const confirm = ()=> true;

   const ask = (question , yes , no)=>{
      if(confirm(question)) yes();
      else no();
   }

   ask(
     "Do you agree?",
     () =>{console.log("You agreed.")},
     () =>{console.log("You canceled the execution");}
   );

 console.log(confirm);
 console.log(ask);

/***************************************Exercice Jeu Chifouni****************************************************** */
/*function jeuchifouni(){
     
     let temporaire = Math.random();
     console.log(temporaire);
     let res =prompt("allez a toi jouer !");
     alert(res);

     for(let i=1;i<3;i++){
        const joueur=prompt("A toi jouer !");
        const robot=Math.floor(Math.random());
        let resultat ="";
        if(joueur===robot){
            resultat="Egalité";
        }
        else if((joueur==="Pierre" && robot==="Ciseaux")|| (joueur==="Ciseaux" && robot==="Feuilles")||(joueur==="Feuilles" && robot==="Pierre"))
        {
            resultat = "Gagné";
        }
        else{
            resultat="Perdu";
        }

     }
}  */

/***************************************************************************** */


	

	function chifoumiordi(){

        let score = 0;
	
		let reponseordi = Math.floor(Math.random());
        let reponse = prompt("A toi jouer");
		switch(reponse){

			case "pierre":
			reponse = 1;
			break;

			case "feuille":
			reponse = 2;
			break;

			case "ciseaux":
			reponse = 3;
			break;


			default:
			alert("Réessayez");
			break;
		}


		if(reponseordi == reponse)
		{
            alert("Egalité");
            resultat="Egalité";
            
		}

		else if ((reponseordi == 1 && reponse == 3) ||(reponseordi ==2  && reponse ==3 ) || (reponseordi == 1 && reponse == 2)){
            alert("Gagné");
            resultat = "Gagné";

        }
			
		score++;

        if(score==3){
            alert("Resultat Final "+resultat);
            return;
        }
			
	}

    console.log(chifoumiordi);

/*************************Tableau*************************** */
const passagers =["Dounia","Manal","Mama","Papa"];
console.log(passagers[1]);

for (let passager of passagers){
    console.log("Le passeger est :"+passager);
}

for (let i in passagers){
    console.log("Le passeger est :"+passagers[i]);
}
passagers.forEach(passager=>console.log("Le passegere est"+passager));

//transoformer un tableau MAP

//concat
//filter
//inclides
//pop
//slides
//splice
//push : ajoute les élements a la fin 
//reverse ()

/*************API************************************* */
//await
//async

// Les boucles
console.log("Les boucles");


// FOR
//  for( /* initialisation */ ; /* condition */ ;  incrémentation  ) {
//   /* instructions à répeter */
// }

// let monNombre = 10
// for (monNombre; monNombre <= 90; monNombre += 3) {
// 	console.log("le nombre est : " + monNombre);
// 	// if (monNombre === 52) {
// 	// 	monNombre = 70
// 	// }
// }

// WHILE
const nombreDeSiegesDisponibles = 10
let nombreDeSiegesOccupes = 0

while(nombreDeSiegesOccupes <= nombreDeSiegesDisponibles) {
	
	console.log("Vous pouvez entrer dans la salle. Nombre de sièges restants : " + (nombreDeSiegesDisponibles - nombreDeSiegesOccupes))

	nombreDeSiegesOccupes++

}

/****objet*** */






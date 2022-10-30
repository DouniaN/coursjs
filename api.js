// Option fonction anonyme
const data=(async() => {
  try{
    const contenu = await fetch("https://ghibliapi.herokuapp.com/films");
    const contenuJson = await contenu.json()
    console.log(contenuJson) ;
  } catch(e){console.log(e)}

    let tab = 
     `<tr>
     <th>title</th>
     <th>original_title</th>
      <th>image</th>
     <th>description</th>
      </tr>`;

    for (let r of contenuJson){  
      
        tab += `<tr> 
        <td>${r.title} </td>
        <td>${r.original_title}</td>
        <td>${r.image}</td> 
        <td>${r.description}</td>          
        </tr>`;  
        for(p of r.people){
            const personne = await fetch(p);
            const contenuJson = await contenu.json()
            console.log(contenuJson) 
        }
        
       

      //console.log("Les id : " + r.id)
    }

    document.getElementById("films").innerHTML = tab;
})()


//Function to define innerHTML for HTML table
//  function show(data) {
//     let tab = 
//     `<tr>
//         <th>title</th>
//         <th>original_title</th>
//         <th>image</th>
//         <th>description</th>
//     </tr>`;
    
//    // Loop to access all rows 
//      for (let r of data.PromiseResult) {
//         tab += `<tr> 
//         <td>${r.title} </td>
//         <td>${r.original_title}</td>
//         <td>${r.image}</td> 
//         <td>${r.description}</td>          
//         </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("employees").innerHTML = tab;
// }


   

  



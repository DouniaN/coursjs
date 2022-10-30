// Option fonction anonyme
const api_url ="https://ghibliapi.herokuapp.com/films";

async function getApi(url){
  const contenu = await fetch(url);
  const contenuJson = await contenu.json()
  console.log(contenuJson);
  if(contenuJson){
    hideloader(); 
  }
  showData(contenuJson);
  getPeople(contenuJson);
}


getApi(api_url);


//Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}

function showData(data){
  let tab =
     `<tr>
      <th>title</th>
      <th>original_title</th>
      <th>image</th>
      <th>description</th>
      </tr>`;

      for (let r of data){
        tab+=
         `<tr>
         <td>${r.title}<td>
         <td>${r.original_title}</td>
         <td>${r.image}</td> 
         <td>${r.description}</td>  
         </tr> `;
        
      }
      document.getElementById("films").innerHTML = tab;
}

async function getPeople(data){
   
   for(let r of data){
      for(let p of r.people){
        const contenu = await fetch(p);
        const people = await contenu.json()

        console.log(people.name);
          
          
      }
   }

}


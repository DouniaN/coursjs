// // Option fonction anonyme
// (async() => {
// const contenu = await fetch("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole-disponibilites&q=&facet=banking&facet=bonus&facet=status&facet=contract_name");
// const contenuJson = await contenu.json()
// console.log(contenuJson)

// })()

function estAnagrame(stringA ,stringB){
    if (stringA.length !== stringB.length) {
        // not the same length, can't be anagram
        return false;
    }

    //Triez les deux chaînes.
    var s1 = stringA.split('').sort().join('');
    var s2 = stringB.split('').sort().join('');
    console.log(s1)
    console.log(s2)

    //Comparer les deux chaines 
    if(stringA===stringB){
        return true;
    }
}
//Test function
console.log(estAnagrame('abc','cba'));
console.log(estAnagrame('créatif','réactif')); 
console.log(estAnagrame('dog','doog'));




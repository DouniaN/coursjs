    function estAnagrame(stringA ,stringB){
        if (stringA.length !== stringB.length) {
            // not the same length, can't be anagram
            return false;
        }

        //Triez les deux chaînes.
        var s1 = stringA.split('').sort().join('');
        var s2 = stringB.split('').sort().join('');

        //Comparer les deux chaines 
        if(stringA===stringB){
            return true;
        }
        else{
            return false;
        }
    }
    //Test function
    console.log(estAnagrame('abc','cba'));
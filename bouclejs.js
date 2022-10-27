
       
      for (let i =1;i<=199; i++){
        document.write(i+'<br/>');
        if(i%3==0 && i%5!=0){
            document.write("coucou !<br/>");
        }
        if(i%5==0 && i%3!=0){
            document.write("hello <br/>");
        }
        if(i%3==0 && i%5==0){
            document.write("couco hello <br/>");
        }

      }
   

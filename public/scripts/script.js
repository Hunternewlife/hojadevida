

function myFunction() {
    
    setInterval(function(){ 
        colores = ["#6a097d","#ffd31d",'#c70039']
        newcolor = Math.round( Math.random()*3-1);
        console.log(colores[newcolor]);
     }, 3000);
  }

  myFunction();


  colores = ["#6a097d","#ffd31d",'#c70039']
  newcolor = Math.round( Math.random()*3-1);
  console.log(colores[newcolor]);
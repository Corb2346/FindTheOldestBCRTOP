

const findTheOldest = function(array) {

let arregloNacimientos = array.map(function(nacimiento){

  return nacimiento.yearOfBirth;

});
console.log(arregloNacimientos);


let arregloMuertes = array.map(function(muerte){


  return muerte.yearOfDeath;

  });     

console.log(arregloMuertes);

let diferenciaFecha = new Array();

for(let i = 0;i<array.length;i++){

  diferenciaFecha[i] = arregloMuertes[i]-arregloNacimientos[i]; 

  if(arregloMuertes[i] == void(0)){
    let yearActual = 0;
   fechActual = new Date();
   arregloMuertes[i] = fechActual.getFullYear();
    console.log(arregloMuertes[i]);
    console.log(typeof arregloMuertes[i]);

    diferenciaFecha[i] = arregloMuertes[i]-arregloNacimientos[i]; 
    
  };
}

console.log(diferenciaFecha);

const masEdad = diferenciaFecha.reduce(function(a,b){

  let maxNum = Math.max(a,b)
  console.log(array);
  console.log(maxNum);
  console.log(typeof maxNum)
  return maxNum;

  });

  console.log(masEdad);

  let verificador =0;
  
  for(let i =0;i<diferenciaFecha.length;i++){

      verificador =diferenciaFecha[i];
      if(verificador == masEdad){

          console.log(array[i]);
          return array[i]
      }
      
  }
}
// Do not edit below this line
module.exports = findTheOldest;

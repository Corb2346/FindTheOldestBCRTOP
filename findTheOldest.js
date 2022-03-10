

const findTheOldest = function(array) {

  /*let fechActual=0;
     
  const fechas = array.map(function(fecha){

    if(fecha.yearOfDeath == void(0)){
    fechActual = new Date();
    let añoActual = fechActual.getFullYear();
    console.log(añoActual);
    console.log(typeof añoActual);
    let restaAños = fecha.añoActual-fecha.yearOfBirth;
    console.log(restaAños);
    console.log(typeof restaAños);
    array[0].yearOfDeath = añoActual;
     
     }

    return (fecha.yearOfDeath-fecha.yearOfBirth);

  }).reduce(function(a,b){
  
    let maxNum = Math.max(a,b)
    console.log(array);
    console.log(maxNum);
    console.log(typeof maxNum)
    return maxNum;
    
  });

    const fechasMap = array.map(function(fecha){

    return (fecha.yearOfDeath-fecha.yearOfBirth);
    });  
  
  console.log(fechas);
  console.log(fechasMap);
  let dato =0;
    for(let i = 0; i<fechasMap.length;i++){
      dato = fechasMap[i];
      
      if(dato === fechas){
  
        console.log(i);
        console.log(array[i]);
        return array[i]
      }
    }
  
};*/

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

  let verificador = 0;
  
  for(let i =0;i<diferenciaFecha.length;i++){

      verificador =diferenciaFecha[i];
      if(verificador == masEdad){

          console.log(array[i]);
          return array[i];
      }
      
  }
}
// Do not edit below this line
module.exports = findTheOldest;

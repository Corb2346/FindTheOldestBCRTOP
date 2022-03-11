

const findTheOldest = function(array) { //funcion que recibe el arreglo que contiene los datos de las personas

let arregloNacimientos = array.map(function(nacimiento){ // funcion que mapea el arreglo principal y obtiene las fechas de nacimiento

  return nacimiento.yearOfBirth; //regresa las fechas de nacimiento de cada objeto

});
console.log(arregloNacimientos); //imprime el arreglo con las fechas de nacimiento


let arregloMuertes = array.map(function(muerte){//crea un arreglo con las fechas de fallecimiento 


  return muerte.yearOfDeath; //mapea y devuelve en un arreglo nuevo las fechas de nacimiento

  });    

console.log(arregloMuertes); //imprime el arreglo nuevo con las fechas de fallecimiento

let diferenciaFecha = new Array(); // crea un nuevo arreglo vacia con la diferencia de las fechas

for(let i = 0;i<array.length;i++){ //recorre el arreglo principal 

  diferenciaFecha[i] = arregloMuertes[i]-arregloNacimientos[i]; //resta las fechas de nacimiento y defuncion y coloca en u nnuevo arreglo

  if(arregloMuertes[i] == void(0)){ //verifica si el arreglo tiene objetos undefined
    let yearActual = 0; 
   fechActual = new Date(); //funcion que obtiene la fecha actual
   arregloMuertes[i] = fechActual.getFullYear(); // se introduce en arreglo faltante el año actual
    console.log(arregloMuertes[i]); //imprime año actual 
    console.log(typeof arregloMuertes[i]); //muestra que tipo de dato es

    diferenciaFecha[i] = arregloMuertes[i]-arregloNacimientos[i]; // si hay undefined hace la diferencia con la fecha actual - fecha de nacimiento
    
  };
}

console.log(diferenciaFecha); 

const masEdad = diferenciaFecha.reduce(function(a,b){ // funcion que obtiene el numero máximo de un arreglo

  let maxNum = Math.max(a,b)
  console.log(array);
  console.log(maxNum);
  console.log(typeof maxNum)
  return maxNum;

  }); 

  console.log(masEdad); //imprime el maximo numero del arreglo

  let verificador =0;
  
  for(let i =0;i<diferenciaFecha.length;i++){ // ciclo que recorre la diferencia fecha y lo compara con el dato del maximo valor 

      verificador =diferenciaFecha[i];
      if(verificador == masEdad){ // una vez que lo encuentra imprime el contenido del indice del arreglo principal en este caso de people. 

          console.log(array[i]);
          return array[i]
      }
      
  }
}
// Do not edit below this line
module.exports = findTheOldest;

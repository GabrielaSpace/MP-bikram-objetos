//Objetos
//Declaración
//1.- Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo, matricula
const Coche ={marca:'chevrolet', modelo:'spark', matricula:'aea37t'};
//2.- Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso
const Casa ={codPostal:'28037', calle:'zalamea', portal:'10', piso:'4'};
//3.- Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes, array proyectos
const FullStackDeveloper ={
lenguajes:['javascrip','python','c'], proyectos:['viejuner','coperos','webpersonal'],}
//4.- Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)
const Perro = {
    nombre:'sam', raza:'bulldog', color:'blanco', edad:'3', 
    ladrar:function () { return console.log('wof')}, 
    popo:function () { return Math.random() * 3}
};

// Lectura de propiedades
//  5.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con .marca guardándolo en la variable marcaPortatil
const marcaPortatil = Portatil.marca;
//  6.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con ["marca"] guardándolo en la variable marcaPortatil2
const marcaPortatil2 = Portatil['marca'];
//  7.- Dado un objeto de nombre Concierto obtén el valor de la propiedad array grupos guardándolo en la variable grupos
const grupos = Concierto.grupos;
//  8.- Dado un objeto de nombre Led obtén el valor de las propiedades rojo, verde y azul guardándolo en la variable array RGB[Rojo, Verde, Azul]
const RGB = [Led.Rojo, Led.Verde, Led.Azul];


// Modificación de propiedades
//  9.- Dado un objeto de nombre Portatil modifica el valor de la propiedad modelo por el valor P345
Portatil.modelo = 'P345';
//  10.- Dado un objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad cartelera
Concierto.cartelera.push("Guns N' Roses");
//  11.- Dado un objeto de nombre Concierto modifica el valor de la propiedad fecha por el valor new Date() (fecha de hoy)
Concierto.fecha = new Date();
//  12.- Dado un objeto de nombre Impresora modifica el valor de la propiedad imprimiendo por el valor objeto con propiedades: nombreArchivo, copias, numPaginas
Impresora.imprimiendo = {  nombreArchivo:'holi.doc', copias:2, numPaginas:3 };


// Objetos
// Declaración
//  13.- Crea un objeto de nombre Noticia que tenga las propiedades: titular, cuerpo
const Noticia = {titular:'xxx', cuerpo:'yyyy'};
//  14.- Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos, edad
const Persona = {nombre:'david', apellidos:'Lima Garcia', edad:28 };
//  15.- Crea un objeto de nombre Avion que tenga las propiedades: numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando'
const Avion={ numPasajeros:22 , 
    despegar: function  (){console.log('despegando');}, 
    volar : function(){ console.log('llegando al destino');},
    aterrizar: function (){console.log('aterrizando');}
};
//  16.- Crea un objeto de nombre Paquete que tenga las propiedades: array contenido con todos los objetos que contenga el paquete
const Paquete = { contenido:['comida','bebida']};
//  17.- Crea un objeto de nombre Pais que tenga las propiedades: numHabitantes, continente, gentilicio
const Pais ={numHabitantes:250000, continente:'Europeo', gentilicio:'español'};



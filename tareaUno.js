//Let es una nueva forma de declarar una variable
//esta puede cambiar la información que le asignamos.
//La diferencia entre var y let, es que si let se declara en una función, esta no puede ser leída fuera de esa función,
//al contrario, var si lo permite.

let miNombre = 'Dani'
if (true){
    miNombre = 'María'
    var miApellido = 'Blanco'
}
console.log(miApellido)


//for ... of statement
//loop utilizado para recorrer una lista

const nums = [1, 2, 3, 4];
for (let num of nums) {
    console.log(num * 3);
}

//Intl.DateTimeFormat
//utilizado para darle formato a la fecha y a la hora

const datetime = new Date('2022-06-17T08:00:00Z');

console.log(new Intl.DateTimeFormat('en').format(datetime));
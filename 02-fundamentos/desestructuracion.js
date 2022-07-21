const Spiderman = {
    nombre: 'Peter',
    Apellido: 'Parker',
    poder: 'el mejor',

    getNombre( ) {
        return `${this.nombre } ${this.Apellido } ${this.poder }`
    }
};


function imprimeheroe( {nombre, Apellido, poder, edad=21} ){
    

//const { nombre, Apellido, poder, edad=21 } = heroe;

console.log( nombre, Apellido, poder, edad ); 

}

imprimeheroe( Spiderman ); 


const heroes = ['A', 'B', 'C'];

/*const h1 = heroes[1];
const h2 = heroes[0];
const h3 = heroes[2];
*/
const[, , h3 ] = heroes;

console.log(h3);
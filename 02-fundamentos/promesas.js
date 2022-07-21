const empleados = [
    {
        id: 1,
        nombre: 'A'
    },

    {
        id: 2,
        nombre: 'b'
    },

    {
        id: 3,
        nombre: 'g'
    },
];

const salarios = [
    {
        id: 1,
        salario: 10
    },

    {
        id: 2,
        salario: 20
    }
];

const getEmpleado = (id) => {
    
    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;
        
         (empleado)
            ? resolve( empleado )
            : reject(`no existe el empleado ${ id }`);
    } );

}

const getSalario = (id) => {
    
    return new Promise( ( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        
         (salario)
            ? resolve( salario )
            : reject(`no existe el salario del id ${ id }`);
    } );

}

const id = 3;

/*getEmpleado(id)
    .then( empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then( salario => console.log(salario))
    .catch(err => console.log(err));
*/

let nombre;

getEmpleado(id)
    .then(empleado =>{
       nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log( `el empleado: `,nombre, `tiene un salario de:`, salario ))
    .catch( err => console.log( err ));
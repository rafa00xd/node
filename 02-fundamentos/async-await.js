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


const getInfoUsuarios = async(id) =>{
    try{
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)

        return `El salario del empleado ${empleado} es de ${salario}`;

    }catch(error){
        throw error;
    }
    }

const id = 1;

getInfoUsuarios(id)
    .then( msg =>{
        console.log('TODO BIEN!')
        console.log(msg)
    })
    .catch( err => {
        console.log('TODO MAL!')
        console.log(err)
    });




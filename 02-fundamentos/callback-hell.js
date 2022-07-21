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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e => e.id === id )?.nombre;
    if(empleado){
        callback (null, empleado);
    } else
        callback (`Empleado con id ${id} no existe`);
}

const getSalario = (id, callback) => {
    const salario = salarios.find( s => s.id === id )?.salario;
    if(salario){
        callback (null, salario);
    } else
        callback (`El salario con id ${id} no existe`);
}

const id = 3;

getEmpleado(id, (err, empleado) => {
    if(err){
       console.log('error') 
       return console.log(err);
    }
    
    getSalario(id, (err, salario) => {
        if(err){
          return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario:', salario);
    })

})
/*setTimeout(function(){
    console.log('hola mundo');
}, 1000);*/

const getUsuarioByID = (id, callback) => {
    const user ={
        id,
        nombre: 'a'
    }

    setTimeout( () =>{
        callback(user)
    },1500)
}

getUsuarioByID(10, (usuario)=>{
    console.log(usuario);
    console.log(usuario.nombre.toUpperCase());
});
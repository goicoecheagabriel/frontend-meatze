export const getPantallas = async ( method,options ) => {

    const token =localStorage.getItem('token');
    const url = `http://localhost:4000/api/pantallas`;
    const retorno = {
        error: false,
        message: {}
    }
  
     if(!token){
        retorno.error=true
        retorno.message={error:'No hay token en el cliente'}
    }     

    switch (method) {
        
        case 'getPantallas':
            const resp = await fetch( url ,{
                method: 'GET',
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": token
                }
     
            });
            console.log( resp,"resp" );
            
            const data = await resp.json();
     
         const pantallas = data.map(pantalla => {
             return {
                 id: pantalla._id,
                 nombre: pantalla.nombre,
                 descripcion: pantalla.descripcion,
                 marca: pantalla.marca,
                 modelo: pantalla.modelo
             }
         })
         
         return pantallas;
    
        default:
            break;
    }
            
       
}
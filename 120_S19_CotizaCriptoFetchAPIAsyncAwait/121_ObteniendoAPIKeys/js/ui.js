//Crearemos la clase de UI
class Interfaz{

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        console.log(div);

        //Seleccionar mensaje mostrar contenido
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        //mostrar mensaje de error temporalmente
        setTimeout( ()=>{
            document.querySelector('.mensajes div').remove();
        },3000);
    }
}
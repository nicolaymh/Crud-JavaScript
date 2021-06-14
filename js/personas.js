//Arreglo para guardar las Personas:
const personas = [
    // new Persona("Wilfido", "Rodriguez"),
    // new Persona("Paola", "Camacho" )
]


//Variables:
let id = "";
const forma = document.forms["forma"];
const nombre = forma["nombre"];
const apellido = forma["apellido"];
const botonAgregar = document.getElementById("agregar");
const botonEditar = document.getElementById("editar");
const botonEliminar = document.getElementById("eliminar");
const alerta = `Debe llenar los campos de Nombres y Apellidos los cuales solo deben llevar letras...!!!`;


// funciones:
/* Verificar campos vacios: */
const verificarCampos = () => (nombre.value !== "" && apellido.value !== "") ? true : false;

/* Verificar que solo se ingresen letras en los inputs con una expresion regular: */
const verificarSoloLetras = () => {
    let verificarNombre = (/^[A-ZÁÉÍÓÚÑüÜú\s]+$/gi.test(nombre.value));
    let verificarApellido = (/^[A-ZÁÉÍÓÚÑüÜú\s]+$/gi.test(apellido.value));
    // console.log(`verificarNombre: ${verificarNombre} verificarApellido: ${verificarApellido}`);
    return (verificarNombre && verificarApellido) ? true : false;
}

/* Limpiar inputs */
const limpiarInput = () => { nombre.value = ""; apellido.value = ""; }

/* guardar id de la persona a editar o eliminar: */
const tomarInformacionPersona = (recibirId) => {    
    let ID = recibirId.id;
    let posicionPersonaArreglo = parseInt(ID.charAt(ID.length - 1)) - 1;
    console.log(posicionPersonaArreglo);
    nombre.value = personas[posicionPersonaArreglo].nombre.trim();
    apellido.value = personas[posicionPersonaArreglo].apellido.trim();
    botonAgregar.disabled = true;
    botonEditar.disabled = false;
    botonEliminar.disabled = false;
    id = ID;    
}

/* Editar persona en el arreglo personas: */
const editarPersonaArreglo = (posicionArreglo) => {    
    let posicionPersonaArreglo = parseInt(posicionArreglo.charAt(posicionArreglo.length - 1)) - 1;
    personas[posicionPersonaArreglo].nombre = nombre.value;
    personas[posicionPersonaArreglo].apellido = apellido.value;
}

/* Eliminar persona en el arreglo personas: */ 
const eliminarPersonaArreglo = (posicionArreglo) => {
    let posicionPersonaArreglo = parseInt(posicionArreglo.charAt(posicionArreglo.length - 1)) - 1;
    personas.splice(posicionPersonaArreglo, 1);    
}
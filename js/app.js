class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

const mostrarPersonas = () => {
    let lista = "";
    let contadorLista = 0
    for (let persona of personas){
        lista += `<li id="campo${++contadorLista}" onclick="tomarInformacionPersona(this)">${persona.nombre} ${persona.apellido}</li>`;        
    }
    document.getElementById(`personas`).innerHTML = lista;
    botonEditar.disabled = true;
    botonEliminar.disabled = true;
    console.log(personas)
}

const agregarPersona = () => {
    verificarSoloLetras();
    if(verificarCampos() && verificarSoloLetras()){        
        const persona = new Persona(nombre.value.trim( ), apellido.value.trim( ));
        personas.push(persona);
        mostrarPersonas();
        limpiarInput();        
    }
    else alert(alerta);
}

const editarPersona = () => {
    if(verificarCampos() && verificarSoloLetras()){
        document.getElementById(id).innerHTML = `${nombre.value} ${apellido.value}`;
        editarPersonaArreglo(id);
        limpiarInput();                
        botonAgregar.disabled = false;
        botonEditar.disabled = true;
        botonEliminar.disabled = true;
        mostrarPersonas();        
    }
    else alert(alerta);
}

const eliminarPersona = () => {
    let campoPersona = document.getElementById(`personas`);
    campoPersona.removeChild(document.getElementById(id));
    eliminarPersonaArreglo(id);    
    limpiarInput();
    mostrarPersonas();
    botonAgregar.disabled = false;
    botonEditar.disabled = true;
    botonEliminar.disabled = true;    
}
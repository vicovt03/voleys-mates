var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');

var validarNombre = function(e){
    if (formulario.nombre.value == 0){
         alert("Completa el campo nombre");
         e.preventDefault();
    }
};  
var validarApellido = function(e){
    if (formulario.apellido.value == 0){
         alert("Completa el campo apellido");
         e.preventDefault();
    }
}; 
var validarCorreo = function(e){
    if (formulario.correo.value == 0){
         alert("Completa el campo correo");
         e.preventDefault();
    }
};  
var validarRadio = function(e){
    if (formulario.sexo[0].checked == true || 
        formulario.sexo[1].checked == true|| 
        formulario.sexo[2].checked == true){
    } else{
        alert("Completa el campo sexo");
        e.preventDefault();
    }
};

var validar = function(e){
    validarNombre(e);
    validarApellido(e)
    validarCorreo(e)
    validarRadio(e);
};

formulario.addEventListener("submit", validar);

    
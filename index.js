
const formulario = document.querySelector("#formulario");


formulario.addEventListener( "submit", validarFormulario )



function validarFormulario(e){
    e.preventDefault();
    const formacion = document.querySelector("#formacion").value
    const carrera = document.querySelector("#carrera").value
    const fecha = document.querySelector("#fecha").value
    const aptitudes = document.querySelector("#aptitudes").value
    const habilidades = document.querySelector("#habilidades").value
    const idiomas = document.querySelector("#idiomas").value
    const puesto = document.querySelector("#puesto").value
    const lugar = document.querySelector("#lugar").value
    const descripcion = document.querySelector("#descripcion").value

}




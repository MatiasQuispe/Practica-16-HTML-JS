var respuesta = window.prompt('Cuál es su rol?');
if (respuesta == 'admin' || respuesta == 'recursos') {

    var clave = prompt('Cual es su clave?')

    if (clave == 1234) {

        var usuario = prompt('Cual es su nombre de usuario?')

    }

}

else { window.location.href = 'error.html' }


document.querySelector('#header').innerHTML = '<h1> Hola ' + usuario + ' bienvenido a nuestra aplicación</h1>'

var empleados = [
    { nombre: 'Juan', apellido: 'Pedro', edad: 40 },
    { nombre: 'Ana', apellido: 'García', edad: 25 },
    { nombre: 'Maria', apellido: 'Zarate', edad: 34 }
]

ciclo();

function agregar(){
    info1 = document.getElementById("nombreCaja").value;
    info2 = document.getElementById("apellidoCaja").value;
    info3 = document.getElementById("edadCaja").value;
    empleados.push({nombre: info1, apellido: info2, edad: info3});

    restablecerFormulario();

    ciclo();
}

function restablecerFormulario(){
    document.getElementById("nombreCaja").value = "";
    document.getElementById("apellidoCaja").value = "";
    document.getElementById("edadCaja").value = "";
}


function ciclo(){

mensaje = '<tr><th> Nombre </th><th>Apellido</th><th>Edad</th></tr>'

for (i = 0; i < empleados.length; i++) {

    mensaje += '<tr><td>' + empleados[i].nombre + '<td>' + empleados[i].apellido + '</td><td>' + empleados[i].edad + '</td></tr>'


}

document.getElementById('caja').innerHTML += mensaje

}
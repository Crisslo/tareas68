function recogeDatos(){
    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#fecha").value;
    var edad = 2019 - fecha;

    console.log("hola " + nombre + ",tienes " + edad + " años");
}

recogeDatos();
function sumar() {

    let n1 = Number(document.getElementById("calificacion1").value);

    let n2 = Number(document.getElementById("calificacion2").value);

    let n3 = Number(document.getElementById("calificacion3").value);

    let n4 = Number(document.getElementById("calificacion4").value);

    let n5 = Number(document.getElementById("calificacion5").value);

    let suma = n1 + n2 + n3 + n4 + n5;

    let resultado = suma/5;

    document.getElementById("resultado").innerHTML =
        "Promedio: " + resultado;

}
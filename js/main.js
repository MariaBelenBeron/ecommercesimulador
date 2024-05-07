let mensajePrecio =""
const mensajeInicial = " Ingrese el codigo del producto a consultar: \n" +
                       "1) Primer producto 🌼 \n"+
                       "2) Segundo producto 🌳 \n"+
                       "3) Tercer producto 🌵\n"+
                       "4) Cuarto producto 🌷\n"+
                       "5) Quinto producto 🌿\n"+
                       "6) Sexto producto 🍀\n"+
                       "7) Septimo producto 🌻\n"+
                       "8) Octavo producto 🌱\n"


function preguntarPrecios () {
    let seleccion = prompt (mensajeInicial).trim()
    if (seleccion !== "1" && seleccion !== "2" && seleccion !== "3" && seleccion !== "4" && seleccion !== "5" && 
    seleccion !== "6" && seleccion !== "7" && seleccion !== "8" ) {
    alert ("❌Codigo inexistente, ingrese codigo valido")
    return preguntarPrecios ()
    } else{

    let valorTotal
    let cuotas

    switch(seleccion) {
        case "1": valorTotal = 1700
            break
        case "2": valorTotal = 1600
            break
        case "3": valorTotal = 1800
            break
        case "4": valorTotal = 1900
            break
        case "5": valorTotal = 2000
            break
        case "6": valorTotal = 2300
            break
        case "7": valorTotal = 2500
            break
        case "8": valorTotal = 2400
            break
        default:
    }
    alert ("Precio del producto$" + valorTotal)
    let resultado = confirm(" ¿Desea consultar las cuotas?")
if(resultado == true) {
    cuotas = prompt("Ingrese la cantidad de cuotas (3, 6 o 12):").trim()
    if (cuotas !== "3" && cuotas !== "6" && cuotas !== "12") {
        alert("❌ Cantidad de cuotas invalida, ingrese 3, 6 o 12")
        return preguntarPrecios()
    } else {
        const valorCuota = valorTotal / cuotas
        alert("El valor de cada cuota es $" + valorCuota.toFixed(2))
        }
    }
}
resultado = confirm(" ¿Desea consultar otro precio?")
if (resultado == true) {
    preguntarPrecios()
} else {
alert("Gracias por visitar nuestra pagina 😀.")
}
}
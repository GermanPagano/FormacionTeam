let inicio = document.getElementsByTagName("button")[0]
inicio.addEventListener("click", crear )

function crear() {
    document.getElementById("inicio").style.display="none"
    document.getElementById("crea").style.display="flex"
    document.getElementById("jugadores").style.display="block"
}

let escribir = document.getElementById("escribir")
escribir.addEventListener("click", cancha )

function cancha () {

 
 arco = document.getElementById("nombrearco").value.toUpperCase()
        document.getElementById("arco").innerHTML= arco

 lateral1 = document.getElementById("lateral1").value.toUpperCase()
           document.getElementById("lateral_izq").innerHTML= lateral1

central1 = document.getElementById("central1").value.toUpperCase()
           document.getElementById("primer_central").innerHTML= central1

central2 = document.getElementById("central2").value.toUpperCase()
           document.getElementById("segundo_central").innerHTML= central2
 
lateral2 = document.getElementById("lateral2").value.toUpperCase()
           document.getElementById("lateral_derecho").innerHTML= lateral2

volante1 = document.getElementById("volante1").value.toUpperCase()
           document.getElementById("volante_izquierda").innerHTML= volante1

volante2 = document.getElementById("volante2").value.toUpperCase()
           document.getElementById("volante_central").innerHTML= volante2

volante3 = document.getElementById("volante3").value.toUpperCase()
           document.getElementById("volante_derecho").innerHTML= volante3


eldiez = document.getElementById("el10").value.toUpperCase()
           document.getElementById("elnumero10").innerHTML= eldiez

delantero1 = document.getElementById("delantero11").value.toUpperCase()
           document.getElementById("delantero_prim").innerHTML= delantero1


delantero2 = document.getElementById("delantero22").value.toUpperCase()
           document.getElementById("delantero_seg").innerHTML= delantero2

}
let nombre = 'Cris ';

let apellido = 'Miro';

let estudiante = nombre + apellido;

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let numeroDeLetras = estudiante.length;

let primeraLetra = nombre.charAt();

let ultimaLetra = apellido.charAt(apellido.length-1)

let eliminaEspacios = estudiante.split(" ").join("");



    let buscar = estudiante.search('Cris');
if(buscar!=-1){
    buscar = true;
}else{
    buscar = false;
}




function myFunction(){
    document.getElementById("p1").innerHTML = nombre;
    document.getElementById("p2").innerHTML = apellido;
    document.getElementById("p3").innerHTML = estudiante;
    document.getElementById("p4").innerHTML = estudianteMayus;
    document.getElementById("p5").innerHTML = estudianteMinus;
    document.getElementById("p6").innerHTML = numeroDeLetras;
    document.getElementById("p7").innerHTML = primeraLetra;
    document.getElementById("p8").innerHTML = ultimaLetra;
    document.getElementById("p9").innerHTML = eliminaEspacios;
    document.getElementById("p10").innerHTML = buscar;
}



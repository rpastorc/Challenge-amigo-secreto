console.log("Hola soy Renzo");

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
//ulListaAmigos es para mostrar la lista de amigos por almacenar
const ulResultado = document.getElementById("resultado");
//ulResultado guarda el resultado aleatorio
let intentoSorteo = 1;

function agregarAmigo() {
  if (String(inputAmigo.value).trim() === ""){
    alert ("Dato invalido, debe ingresar un nombre");
  }
  else{
   if (!listaAmigos.includes(document.querySelector('#amigo').value)){
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    limpiarCaja();
   }
   else{
    alert("Este nombre ya fue ingresado, por favor digite un diferente");
   }
  }
};
//Se implementa funcion para limpiar caja una vez se ingrese el nombre de un amigo
function limpiarCaja() {
  document.querySelector('#amigo').value = "";
}
function sortearAmigo(){
  if(listaAmigos.length === 0){
  alert ("Primero debe ingresar el nombre de su(s) amigo(s) y picar el botón de Añadir (Tantas veces sea necesario)");
  }
  else{
    if (intentoSorteo === 1) {
    const random =Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
    intentoSorteo++;
    document.querySelector('#bAñadir').setAttribute('disabled','true');
    document.querySelector('#amigo').setAttribute('disabled','true');
  }
    else{
      bloquearSorteo();
      alert("Sorteo finalizado, por favor actualice la pagina para iniciar un nuevo sorteo");
    }
  }
}
//Se implementa la funcion para bloquear el boton Sortear amigo y Añadir
function bloquearSorteo () {
  limpiarCaja ();
  document.querySelector('#bSortear').setAttribute('disabled','true');
}

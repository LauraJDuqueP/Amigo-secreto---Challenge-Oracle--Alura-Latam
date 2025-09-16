// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let users = [];

// funcion para agregar los nombres de los amigos

function executeValor() {
  return document.getElementById("amigo").value;
}

function addFriends(name) {
  let valorname = executeValor();
  if (valorname.trim() !== "") {
    //  Guardamos en el array
    users.push(valorname);

    // Mostramos en consola
    console.log(users);

    //  Limpiamos el input
    document.getElementById("amigo").value = "";
  } else {
    console.log("El campo está vacío");
  }
}

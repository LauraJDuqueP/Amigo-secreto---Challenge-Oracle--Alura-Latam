// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let users = [];

//funcion para capturar el valor ID del html
function captureValue(value) {
  return document.getElementById(value);
}

// funcion para agregar los nombres de los amigos
function addFriends(name) {
  let valorname = captureValue("amigo").value;
  if (valorname.trim() !== "") {
    users.push(valorname);

    console.log(users);
    captureValue("amigo").value = "";
    const name = captureValue("listaAmigos");
    name.innerHTML = "";
    users.forEach((nombre) => {
      const li = document.createElement("li"); // creamos un <li>
      li.textContent = nombre; // le ponemos el texto
      name.appendChild(li); // lo agregamos dentro del <ul>
    });
  } else {
    console.log("El campo está vacío");
  }
}

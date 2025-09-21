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

    //console.log(users);
    captureValue("amigo").value = "";
    let name = captureValue("listaAmigos");
    name.innerHTML = "";
    users.forEach((nombre) => {
      const li = document.createElement("li"); // creamos un <li>
      li.textContent = nombre; // le ponemos el texto
      name.appendChild(li); // lo agregamos dentro del <ul>
    });
  } else {
    alert("El campo está vacío. Ingresa el nombre de un amigo");
  }
}

function sortearAmigo() {
  let number = Math.floor(Math.random() * users.length);
  //console.log(number);
  let name = captureValue("listaAmigos");
  name.textContent = "";
  let newP = captureValue("miParrafo");
  newP.style.display = "flex";
  newP.style.flexDirection = "column";
  newP.style.alignItems = "center";
  // este código funciona pero no me centra el nombre
  //newP.textContent = `Tu amigo Secreto es: \n !!${users[number]}!! :D`;
  //este código si centra el nombre del amigo secreto
  newP.innerHTML = `Tu amigo Secreto es:<br><span style="display:block; text-align:center; font-weight:bold;">!!${users[number]}!! :D</span>`;
}

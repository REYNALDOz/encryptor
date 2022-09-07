const listaCodigo = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function encriptar() {
  let mensaje = document.getElementById("mensaje").value;
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    if (mensaje[i] == "a") {
      mensajeEncriptado += listaCodigo.a;
    } else if (mensaje[i] == "e") {
      mensajeEncriptado += listaCodigo.e;
    } else if (mensaje[i] == "i") {
      mensajeEncriptado += listaCodigo.i;
    } else if (mensaje[i] == "o") {
      mensajeEncriptado += listaCodigo.o;
    } else if (mensaje[i] == "u") {
      mensajeEncriptado += listaCodigo.u;
    } else {
      mensajeEncriptado = mensajeEncriptado + mensaje[i];
    }
  }
  document.getElementById("muestra").innerHTML = mensajeEncriptado;
}

function desencriptar() {
  let mensaje = document.getElementById("mensaje").value;
  let mensajeDesencriptado = "";
  for (let i = 0; i < Object.keys(listaCodigo).length; i++) {
    if (mensaje.includes(Object.values(listaCodigo)[i])) {
      mensaje = mensaje.replaceAll(
        Object.values(listaCodigo)[i],
        Object.keys(listaCodigo)[i]
      );
    } else {
      mensajeDesencriptado = mensaje;
    }
    mensajeDesencriptado = mensaje;
  }

  document.getElementById("muestra").innerHTML = mensajeDesencriptado;
}

function copiar() {
  let copyText = document.getElementById("muestra");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

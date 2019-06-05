/* Obteniendo nombre del ususario */
const Usuario = document.getElementById('nombre');
function usuario() {
  const nombre= nombreUsuario.value;
  console.log(nombre);
}
/* Validando Contraseña */
const btningresar=document.getElementById('ingresar');
btningresar.addEventListener('click', validarcontraseña);
const contraseña= document.getElementById('contraseña');
let contador=0;
const fincontador=3;
function validarcontraseña(){
  if (contraseña.value==="LABORATORIA") {
  document.getElementById('nombre-Contraseña').style.display='none';
  document.getElementById ('cifrar-descifrar').style.display='block';
  }
  if (contraseña.value!=="LABORATORIA") {
    contador=contador+1;
      if (contador<fincontador) {
        alert("Contraseña Incorrecta, intenta otra Vez");
      }
      else {
     alert("Contraseña incorrecta, no podrás cifrar ni descifrar el mensaje");
    }
  }
}
/* acción cifrar */
const btncifrar=document.getElementById('cifrar');
btncifrar.addEventListener('click', cifrar);
function cifrar(){
  document.getElementById ('cifrar-descifrar').style.display='none';
  document.getElementById('offsetdescifrar').style.display='none';
  document.getElementById('offsetcifrar').style.display='block';
}
/* acción descifrar */
const btndescifrar=document.getElementById('descifrar');
btndescifrar.addEventListener('click', descifrar);
function descifrar(){
  document.getElementById ('cifrar-descifrar').style.display='none';
  document.getElementById('offsetcifrar').style.display='none';
  document.getElementById('offsetdescifrar').style.display='block';
}
/* Ingresar offset para cifrar */
const btnoffsetcifrar=document.getElementById('aceptarcifrar');
btnoffsetcifrar.addEventListener('click',offsetcifrar);
function offsetcifrar() {
  document.getElementById('offsetcifrar').style.display='none';
  document.getElementById('offsetdescifrar').style.display='none';
  document.getElementById('ingtextcif').style.display='block';
}
/* Ingresar offset para descifrar*/
const btnoffsetdescifrar=document.getElementById('aceptardescifrar');
btnoffsetdescifrar.addEventListener('click',offsetdescifrar);
function offsetdescifrar() {
  document.getElementById('offsetcifrar').style.display='none';
  document.getElementById('offsetdescifrar').style.display='none';
  document.getElementById('ingtextdescif').style.display='block';
}
/*ingresar text para cifrar*/
const cifrartext=document.getElementById('cifrartext');
cifrartext.addEventListener('click',citext);
function citext(){
  document.getElementById('ingtextcif').style.display='none';
  document.getElementById('mensajedescifrado').style.display='none';
  document.getElementById('mensajecifrado').style.display='block';
}
/*ingresar text para descifrar*/
const descifrartext=document.getElementById('descifrartext');
descifrartext.addEventListener('click',destext);
function destext(){
  document.getElementById('ingtextdescif').style.display='none';
  document.getElementById('mensajecifrado').style.display='none';
  document.getElementById('mensajedescifrado').style.display='block';
}
/*finalizar y regresar al inicio*/
const finalizar=document.getElementById('fin');
finalizar.addEventListener('click', fin);
function fin(){
  document.getElementById('mensajecifrado').style.display='none';
  document.getElementById('mensajedescifrado').style.display='none';
  document.getElementById('nombre-Contraseña').style.display='block';
}
/*finalizar y regresar al inicio*/
const finalizar1=document.getElementById('fin1');
finalizar1.addEventListener('click', fin1);
function fin1(){
  document.getElementById('mensajecifrado').style.display='none';
  document.getElementById('mensajedescifrado').style.display='none';
  document.getElementById('nombre-Contraseña').style.display='block';
}

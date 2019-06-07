
/* Validando Contraseña */
const btningresar=document.getElementById('ingresar');
const contraseña= document.getElementById('contraseña');
let contador=0;
btningresar.addEventListener('click', () => {
  if (contraseña.value==="LABORATORIA") {
  document.getElementById('nombre-Contraseña').style.display='none';
  document.getElementById ('cifrar-descifrar').style.display='block';
  }
  if (contraseña.value!=="LABORATORIA") {
    contador=contador+1;
      if (contador<3) {
        alert("Contraseña Incorrecta, intenta otra Vez");
      }
      else {
     alert("Contraseña incorrecta, no podrás cifrar ni descifrar el mensaje");
     document.getElementById('nombre-Contraseña').style.display='none';
    }
  }
});
/* acción cifrar */
const btncifrar=document.getElementById('cifrar');
btncifrar.addEventListener('click', () => {
  document.getElementById ('cifrar-descifrar').style.display='none';
  document.getElementById('offsetdescifrar').style.display='none';
  document.getElementById('offsetcifrar').style.display='block';
});
/* acción descifrar */
const btndescifrar=document.getElementById('descifrar');
btndescifrar.addEventListener('click', () => {
  document.getElementById ('cifrar-descifrar').style.display='none';
  document.getElementById('offsetcifrar').style.display='none';
  document.getElementById('offsetdescifrar').style.display='block';
});
/* Ingresar offset para cifrar */
const btnoffsetcifrar=document.getElementById('aceptarcifrar');
btnoffsetcifrar.addEventListener('click', () => {
  const string1=document.getElementById('textcif');
  const offset1=document.getElementById('offsetci');
  document.getElementById('encriptado').innerHTML=cipher.encode(offset1, string1)
  document.getElementById('offsetcifrar').style.display='none';
  document.getElementById('mensajedescifrado').style.display='none';
  document.getElementById('mensajecifrado').style.display='block';
});
/* Ingresar offset para descifrar*/
const btnoffsetdescifrar=document.getElementById('aceptardescifrar');
btnoffsetdescifrar.addEventListener('click', () => {
  document.getElementById('offsetdescifrar').style.display='none';
  document.getElementById('mensajecifrado').style.display='none';
  document.getElementById('mensajedescifrado').style.display='block';
});
/*finalizar y regresar al inicio*/
const finalizar=document.getElementById('fin');
finalizar.addEventListener('click', () => {
  document.getElementById('mensajecifrado').style.display='none';
  document.getElementById('mensajedescifrado').style.display='none';
  document.getElementById('nombre-Contraseña').style.display='block';
});
/*finalizar y regresar al inicio*/
const finalizar1=document.getElementById('fin1');
finalizar1.addEventListener('click', () => {
  document.getElementById('mensajecifrado').style.display='none';
  document.getElementById('mensajedescifrado').style.display='none';
  document.getElementById('nombre-Contraseña').style.display='block';
});

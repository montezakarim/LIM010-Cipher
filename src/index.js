/*nombre de usuario*/
/* Validando Contraseña */
const btningresar=document.getElementById('ingresar');
const contraseña= document.getElementById('contraseña');
let contador=0;
btningresar.addEventListener('click', () => {
  if (contraseña.value==="LABORATORIA") {
  const nombreusuario=document.getElementById('nombre').value;
  console.log(nombreusuario);
  document.getElementById('usuario').innerHTML='Hola '+ nombreusuario;
  document.getElementById('nombre-contraseña').style.display='none';
  document.getElementById ('cifrar-descifrar').style.display='block';
  }
  if (contraseña.value!=="LABORATORIA") {
    contador=contador+1;
      if (contador<3) {
        alert("Contraseña Incorrecta, intenta otra Vez");
      }
      else {
     alert("Contraseña incorrecta, no podrás cifrar ni descifrar el mensaje");
     document.getElementById('nombre-contraseña').style.display='none';
    }
  }
});
/* acción cifrar */
const btncifrar=document.getElementById('cifrar');
btncifrar.addEventListener('click', () => {
  document.getElementById ('cifrar-descifrar').style.display='none';
  document.getElementById('descifrado').style.display='none';
  document.getElementById('cifrado').style.display='block';
  document.getElementById('text1').value='';
  document.getElementById('offset1').value='';
});
/* acción descifrar */
const btndescifrar=document.getElementById('descifrar');
btndescifrar.addEventListener('click', () => {
  document.getElementById ('cifrar-descifrar').style.display='none';
  document.getElementById('cifrado').style.display='none';
  document.getElementById('descifrado').style.display='block';
  document.getElementById('text2').value='';
  document.getElementById('offset2').value='';
});
/* Ingresar offset para cifrar */
const btnoffsetcifrar=document.getElementById('aceptarcifrar');
btnoffsetcifrar.addEventListener('click', () => {
  const string1=document.getElementById('text1');
  const offset1=document.getElementById('offset1');
  const encriptado=document.getElementById('encriptado');
  let mensaje1=cipher.encode(offset1.value, string1.value);
  encriptado.innerHTML=(mensaje1);
  document.getElementById('cifrado').style.display='none';
  document.getElementById ('mensajecifrado').style.display='block';
});
/* Ingresar offset para descifrar*/
const btnoffsetdescifrar=document.getElementById('aceptardescifrar')
btnoffsetdescifrar.addEventListener('click',()=>{
  const string2=document.getElementById('text2');
  const offset2=document.getElementById('offset2');
  const mjdescifrado=document.getElementById('mjdescifrado');
  let mensaje2=cipher.decode(offset2.value, string2.value);
  mjdescifrado.innerHTML=(mensaje2)
  document.getElementById('descifrado').style.display='none';
  document.getElementById ('Mensajedescifrado').style.display='block';
});
/*finalizar y regresar al inicio*/
const finalizar=document.getElementById('fin');
finalizar.addEventListener('click', () => {
  document.getElementById('mensajecifrado').style.display='none';
  document.getElementById('nombre-contraseña').style.display='block';
  document.getElementById('nombre').value='';
  document.getElementById('contraseña').value='';
});
/*finalizar y regresar al inicio*/
const finalizar1=document.getElementById('fin1');
finalizar1.addEventListener('click', () => {
  document.getElementById('Mensajedescifrado').style.display='none';
  document.getElementById('nombre-contraseña').style.display='block';
  document.getElementById('nombre').value='';
  document.getElementById('contraseña').value='';
});

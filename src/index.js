/*declarar variables classList*/
const nombrecontraseña=document.getElementById('nombrecontraseña');
const cifrardescifrar=document.getElementById('cifrardescifrar');
const cifrado=document.getElementById('cifrado');
const descifrado=document.getElementById('descifrado');
const mensajecifrado=document.getElementById('mensajecifrado');
const mensajedescifrado=document.getElementById('Mensajedescifrado')
/* Validando Contraseña */
const btningresar=document.getElementById('ingresar');
const contraseña= document.getElementById('contraseña');
const incorrecta=document.getElementById('incorrecta')
let contador=0;
btningresar.addEventListener('click', () => {
  if (contraseña.value==='LABORATORIA') {
  const nombreusuario=document.getElementById('nombre').value;
  document.getElementById('usuario').innerHTML='Hola '+ nombreusuario;
  nombrecontraseña.classList.add('hide');
  cifrardescifrar.classList.remove('hide');
  }
  if (contraseña.value!=='LABORATORIA') {
    if (contraseña.value==='') {
    alert('Ingrese Contraseña');
  }
  else {
      contador=contador+1;
      if (contador<3) {
        incorrecta.innerHTML='Contraseña Incorrecta, intenta otra Vez';
      }
      else {
        incorrecta.innerHTML='Ya utilizaste todos tus intentos, en este momento no podrás ingresar';
        btningresar.disabled=true;
    }
  }
  }
  document.getElementById('nombre').value='';
  document.getElementById('contraseña').value='';
});
/* acción cifrar */
const btncifrar=document.getElementById('cifrar');
btncifrar.addEventListener('click', () => {
  cifrardescifrar.classList.add('hide');
  cifrado.classList.remove('hide');
  document.getElementById('text1').value='';
  document.getElementById('offset1').value='';
});
/* acción descifrar */
const btndescifrar=document.getElementById('descifrar');
btndescifrar.addEventListener('click', () => {
  cifrardescifrar.classList.add('hide');
  descifrado.classList.remove('hide');
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
  cifrado.classList.add('hide');
  mensajecifrado.classList.remove('hide');
});
/* Ingresar offset para descifrar*/
const btnoffsetdescifrar=document.getElementById('aceptardescifrar')
btnoffsetdescifrar.addEventListener('click',()=>{
  const string2=document.getElementById('text2');
  const offset2=document.getElementById('offset2');
  const mjdescifrado=document.getElementById('mjdescifrado');
  let mensaje2=cipher.decode(offset2.value, string2.value);
  mjdescifrado.innerHTML=(mensaje2)
  descifrado.classList.add('hide');
  mensajedescifrado.classList.remove('hide');
});
/*finalizar y regresar al inicio*/
const volver=document.getElementById('volver');
volver.addEventListener('click', () => {
  mensajecifrado.classList.add('hide');
  cifrardescifrar.classList.remove('hide');
});
/*finalizar y regresar al inicio*/
const volver1=document.getElementById('volver1');
volver1.addEventListener('click', () => {
  mensajedescifrado.classList.add('hide');
  cifrardescifrar.classList.remove('hide');
});
/*finalizar y regresar al inicio*/
const finalizar=document.getElementById('fin');
finalizar.addEventListener('click', () => {
  mensajecifrado.classList.add('hide');
  nombrecontraseña.classList.remove('hide');
  document.getElementById('nombre').value='';
  document.getElementById('contraseña').value='';
  document.getElementById('incorrecta').innerHTML="";
});
/*finalizar y regresar al inicio*/
const finalizar1=document.getElementById('fin1');
finalizar1.addEventListener('click', () => {
mensajedescifrado.classList.add('hide');
nombrecontraseña.classList.remove('hide')
  document.getElementById('nombre').value='';
  document.getElementById('contraseña').value='';
  document.getElementById('incorrecta').innerHTML="";
});

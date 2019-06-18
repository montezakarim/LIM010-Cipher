/*declarar variables classList*/
const namePassword=document.getElementById('namePassword');
const ciphers=document.getElementById('ciphers');
const encode1=document.getElementById('encode1');
const decode1=document.getElementById('decode1');
const messageEncode=document.getElementById('messageEncode');
const messageDecode=document.getElementById('messageDecode')
/* Validando Contraseña */
const btnEnter=document.getElementById('enter');
const password= document.getElementById('password');
const incorrect=document.getElementById('incorrect')
let counter=0;
btnEnter.addEventListener('click', () => {
  if (password.value==='') {
    incorrect.innerHTML='Ingrese Contraseña';
  } 
  else{
    if (password.value==='LABORATORIA') {
      const nameUser=document.getElementById('name').value;
      document.getElementById('user').innerHTML='Hola '+ nameUser;
      namePassword.classList.add('hide');
      ciphers.classList.remove('hide');
    }
    else {
      counter=counter+1;
      if (counter<3) {
        incorrect.innerHTML='Contraseña Incorrecta, intenta otra Vez';
      }
      else {
        incorrect.innerHTML='Ya utilizaste todos tus intentos, en este momento no podrás ingresar';
        btnEnter.disabled=true;
      }
    }
  }
  document.getElementById('name').value='';
  password.value='';
});
/* acción cifrar */
const btncifrar=document.getElementById('cifrar');
btncifrar.addEventListener('click', () => {
  ciphers.classList.add('hide');
  encode1.classList.remove('hide');
  document.getElementById('text1').value='';
  document.getElementById('offset1').value='';
});
/* acción descifrar */
const btndescifrar=document.getElementById('descifrar');
btndescifrar.addEventListener('click', () => {
  ciphers.classList.add('hide');
  decode1.classList.remove('hide');
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
  encode1.classList.add('hide');
  messageEncode.classList.remove('hide');
});
/* Ingresar offset para descifrar*/
const btnoffsetdescifrar=document.getElementById('aceptardescifrar')
btnoffsetdescifrar.addEventListener('click',()=>{
  const string2=document.getElementById('text2');
  const offset2=document.getElementById('offset2');
  const mjdescifrado=document.getElementById('mjdescifrado');
  let mensaje2=cipher.decode(offset2.value, string2.value);
  mjdescifrado.innerHTML=(mensaje2)
  decode1.classList.add('hide');
  messageDecode.classList.remove('hide');
});
/*finalizar y regresar al inicio*/
const volver=document.getElementById('volver');
volver.addEventListener('click', () => {
  messageEncode.classList.add('hide');
  ciphers.classList.remove('hide');
});
/*finalizar y regresar al inicio*/
const volver1=document.getElementById('volver1');
volver1.addEventListener('click', () => {
  messageDecode.classList.add('hide');
  ciphers.classList.remove('hide');
});
/*finalizar y regresar al inicio*/
const finalizar=document.getElementById('end');
finalizar.addEventListener('click', () => {
  messageEncode.classList.add('hide');
  namePassword.classList.remove('hide');
  document.getElementById('name').value='';
  password.value='';
  incorrect.innerHTML='';
});
/*finalizar y regresar al inicio*/
const finalizar1=document.getElementById('end1');
finalizar1.addEventListener('click', () => {
messageDecode.classList.add('hide');
namePassword.classList.remove('hide')
  document.getElementById('name').value='';
  password.value='';
  incorrect.innerHTML='';
});
window.cipher = {
  encode: (offset1, string1) => {
    /* Acá va tu código que cifra*/
let MensajeCifrado='';
for (lef i = 0; i < string1.length; i++) {
  let position= (string1.toUpperCase().charCodeAt(1)-65+ parseInt(offset1))%26+65;
  let mensaje=String.fromCharCode(position);
  MensajeCifrado+=mensaje;
 }
return MensajeCifrado
 }


  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};

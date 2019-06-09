window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
let MensajeCifrado='';
let position=0;
for (let i = 0; i < string.length; i++) {
  if (string.charCodeAt(i)===32) {
    position=string.charCodeAt(i);
  }
  else {
    position= (string.toUpperCase().charCodeAt(i)-65+ parseInt(offset))%26+65;
  }
  let mensaje=String.fromCharCode(position);
  MensajeCifrado+=mensaje;
}
return MensajeCifrado;
},
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let Mensajedescifrado='';
    let position1=0;
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i)===32) {
        position1=string.charCodeAt(i);
      }
      else {
        position1= 90-((90-string.toUpperCase().charCodeAt(i)+ parseInt(offset))%26);
      }
      let mensaje1=String.fromCharCode(position1);
      Mensajedescifrado+=mensaje1;
    }
    return Mensajedescifrado;
  }
};

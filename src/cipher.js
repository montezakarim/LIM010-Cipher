window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let textEncode='';
    let position=0;
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
      position= (string.charCodeAt(i)-65+ parseInt(offset))%26+65;
      }
      else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
      position= (string.charCodeAt(i)-97+ parseInt(offset))%26+97;
      }
      else if(string.charCodeAt(i)>=33 && string.charCodeAt(i)<=64){
      position= (string.charCodeAt(i)-33+ parseInt(offset))%32+33;
      } 
      else{
      position=string.charCodeAt(i);
      }
      let message=String.fromCharCode(position);
      textEncode+=message;
    }
    return textEncode;
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let textDecode='';
    let position1=0;
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
      position1= 90-((90-string.charCodeAt(i)+ parseInt(offset))%26);
      }
      else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
      position1= 122-((122-string.charCodeAt(i)+ parseInt(offset))%26);
      }
      else if(string.charCodeAt(i)>=33 && string.charCodeAt(i)<=64){
      position1= 64-((64-string.charCodeAt(i)+ parseInt(offset))%32);
      } 
      else{
      position1=string.charCodeAt(i);
      }
      let message1=String.fromCharCode(position1);
      textDecode+=message1;
    }
    return textDecode;
  }
};
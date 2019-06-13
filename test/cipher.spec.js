describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() =>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() =>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "* ;<=>? 8 6" para "@ 12345 . ," con offset 10',() =>{
      assert.equal(cipher.encode(10,"@ 12345 . ,"),"* ;<=>? 8 6");
    });
    it('debería retornar " " para " " con offset 2',() =>{
      assert.equal(cipher.encode(2," ")," ");
    });
  });

  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',() =>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "@ 12345 . ," para "* ;<=>? 8 6" con offset 10',() =>{
      assert.equal(cipher.decode(10,"* ;<=>? 8 6"),"@ 12345 . ,");
    });
    it('debería retornar " " para " " con offset 2',() =>{
      assert.equal(cipher.decode(2," ")," ");
    });
  });

});
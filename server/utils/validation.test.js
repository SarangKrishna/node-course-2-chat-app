var expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', ()=>{

  it('Should reject non string values', ()=>{
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('Should reject strings with only spaces',()=>{
    var res = isRealString('     ');
    expect(res).toBe(false);
  });

  it('Should allow strings with non-space characters', ()=>{
    var res = isRealString('    Sarang   ');
    expect(res).toBe(true);
  });
});

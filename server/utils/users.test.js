const expect = require('expect');
const {Users} = require('./users');

describe('Users',()=>{

  var users;
  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Sanand',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Sruthi',
      room: 'React course'
    }, {
      id: '3',
      name: 'Ammu',
      room: 'Node course'
    }]
  });

  it('Should add new user',()=>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Sarang',
      room: 'Office'
    }
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('Should remove a user', ()=>{
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2)
  });

  it('Should not remove a user', ()=>{
    var userId = '56';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3)
  });

  it('Should find user', ()=>{
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('Should not find user', ()=>{
    var userId = '24';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('Should return names for Node course ', ()=> {
    var userList = users.getUserList('Node course');
    expect(userList).toEqual(['Sanand','Ammu']);
  });

  it('Should return names for React course ', ()=> {
    var userList = users.getUserList('React course');
    expect(userList).toEqual(['Sruthi']);
  });

});

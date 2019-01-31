// var date = new Date();
// console.log(date.getMonth());
var moment = require('moment');
var createdAt = 1234
var date = moment(createdAt);
// console.log(date.format('MMMM Do YYYY, h:mm:ss a'));
// console.log(date.startOf('hour').fromNow());
console.log(date.format('h:mm a'));

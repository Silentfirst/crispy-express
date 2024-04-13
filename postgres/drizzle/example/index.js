var s = "hi";
console.log(s);
var my = ['hi', { 'key': 'sex' }, 'bue', 1, 2];
my.map(function (item) { return console.log(item); });
console.log(true === my.every(function (item) { return item; }) && my.every(function (item) { return item; }));

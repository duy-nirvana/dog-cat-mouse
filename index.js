var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog1 = new Dog('Gấu Chó');
var cat1 = new Cat('Doremon');
var mouse1 = new Mouse('Mickey');


dog1.sayHi();

cat1.eat(mouse1);
dog1.eat(cat1);

console.log(dog1);
console.log(cat1);
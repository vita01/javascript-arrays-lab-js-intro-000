const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name){
  var arr=kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  var arr=kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
kittens.pop();
  return kittens;

}

function destructivelyRemoveFirstKitten(){
kittens.shift();
return kittens;

}
function appendKitten(name){
return [...kittens,name];

}
function prependKitten(name){
return [name,...kittens];

}

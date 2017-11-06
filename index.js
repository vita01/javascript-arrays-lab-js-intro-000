const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name){
  var arr=kittens.push(name);
  return kittens;
}
destructivelyPrependKitten(name){
kittens.unshift(name);
  return kittens;
}

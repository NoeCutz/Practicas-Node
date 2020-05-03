console.log('Inicio de programa');

setTimeout(function () {
  console.log('Primer timeout');
}, 300);

setTimeout(function () {
  console.log('Segundo timeout');
}, 0);

setTimeout(function () {
  console.log('Tercer timeout');
}, 0);

console.log('Fin del programa');

let empleados = [{
  id: 1,
  nombre: 'Fernando'
}, {
  id: 2,
  nombre: 'Melisa'
}, {
  id: 3,
  nombre: 'Juan'
}
];

let salarios = [{
  id: 1,
  salario: 1000
}, {
  id: 2,
  salario: 2000
}];

let getEmpleado = (id, callback) => {

  let empleadoBD = empleados.find(empleado => empleado.id == id);

  if (!empleadoBD) {
    callback(`No existe un empleado con el ID ${id}`);
  }else {
    callback(null, empleadoBD);
  }
}


let getSalario = (empleado, callback) => {
  let salarioBD = salarios.find(salario => salario.id = empleado.id);

  if (!salarioBD) {
    callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
  }else{
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioBD.salario,
      id: empleado.id
    });
  }

}


getEmpleado(1, (err, empleado) => {

  if (err) {
    return console.log(err);
  }

  getSalario(empleado, (err, resp) => {
    if (err) {
      return console.log(err);
    }

    console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
  })

})

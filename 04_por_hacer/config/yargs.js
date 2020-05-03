const descripcion = {
  alias : 'd',
  demand : true,
  desc : 'Descripción de la tarea por hacer'
};

const completado = {
  alias :  'c',
  demand : true,
  default : true,
  desc : 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
  .command('crear','Crear un elemento por hacer',{
    descripcion
  })
  .command('actualizar', 'Actualiza un estado completado de una tarea',{
    descripcion ,
    completado
  })
  .command('borrar','Borra un elemento por hacer',{
      descripcion
    })
  .help()
  .argv


module.exports = {
  argv
}

module.exports = {
  tableName: 'db_prueba',
  attributes: {
    id: {
      type: 'number',
      required: true,
      unique: true,
      autoIncrement: true,
      columnType: 'int',
    },
    codigo: {
      type: 'String',
      unique: true,
      required: true,
      maxLength: 10,
    },
    tipo: {
      type: 'String',
      maxLength: 50,
      required: true
    },
    nombre: {
      type: 'String',
      maxLength: 50,
      required: true
    },
    pruebaPregunta:{
      collection: 'PruebaPregunta',
      via: 'idPrueba'
    },
    pruebaUsuario:{
      collection: 'PruebaUsuario',
      via: 'idPrueba'
    }
  }
};

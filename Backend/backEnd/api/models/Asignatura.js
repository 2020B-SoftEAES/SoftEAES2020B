module.exports = {
  tableName: 'db_asignatura',
  attributes: {
    id: {
      type: 'number',
      required: true,
      unique: true,
      autoIncrement: true,
      columnType: 'int',
    },
    nombre: {
      type: 'String',
      maxLength: 50,
      required: true
    },
    asignatura:{
      collection: 'Pregunta',
      via: 'idAsignatura'
    },
  }
};
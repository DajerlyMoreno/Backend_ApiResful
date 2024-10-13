const mongoose = require('mongoose')
const {Schema} = mongoose

const schemaDepartment = new Schema({
    id : {
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required: true
    },
    employees : [{
        type : Schema.Types.ObjectId,
        ref: 'employees'
    }],
})

// Virtual field para el número de empleados
departmentSchema.virtual('numEmployees').get(function () {
    return this.employees.length;
});

module.exports = mongoose.model('departments', schemaDepartment)
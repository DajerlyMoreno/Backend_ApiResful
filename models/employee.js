const mongoose = require('mongoose')

const {Schema} = mongoose

const schemaEmployee = new Schema({
    id : {
        type: Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true},
    salary : {
        type : Number,
        required : true,
        validate : {
            validator: function(v) {
                return /\d+/.test(v);
            },
            message: props => `${props.value} is not a valid!`
            
        }
    },
    department : {
        type : Schema.Types.ObjectId,
        ref : 'departments'
    }
})

module.exports = mongoose.model('employees', schemaEmployee)
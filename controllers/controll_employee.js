// Controller of the Employee
const Employee = require('./../models/employee')
module.exports = {
    'findAll' : async (req,res)=>{
        try{

            const result = await Employee.find({})

            return res.status(200).json({state:true,data:result})

        }catch(err){
            return res.status(500).json({state:"Error",data:null})
        }
    }
}
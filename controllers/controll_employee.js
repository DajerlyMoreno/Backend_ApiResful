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
    },
    'findById': async (req,res)=>{
        const {id} = req.params
        try{

            const result = await Employee.findById(id)

            if(result){
                return res.status(200).json({state:true,data:result})
            }

            return res.status(401).json({state:true,data:null})

        }catch(err){
            return res.status(500).json({state:false,data:err})
        }
    }
}
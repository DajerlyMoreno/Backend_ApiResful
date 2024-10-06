// Controller of the Department
const Department = require('./../models/department')

module.exports = {
    update:async(req,res)=>{
        const {idD} = req.params
        const {id,name,numEmployees,employees} = req.body
        
        try{
            const department = await Department.findByIdAndUpdate(idD,{$set:{id,name,numEmployees,employees}}, {new:true, runValidators: true})
            if (department) {
                return res.status(200).json({ state: "Success", data: department });
            } else {
                return res.status(404).json({ state: "Not Found", data: null });
            }
        }catch(err){
          return res.status(501).json({state:"",data:err})
        }
    },
}
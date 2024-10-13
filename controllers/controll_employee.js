// Controller of the Employee
const Employee = require('./../models/employee')
const Department = require('./../models/department')
module.exports = {
    'save' : async(req,res)=>{
        const employee = new Employee(req.body)
        const {id} = req.params
        try{
            const department = await Department.findById(id)
            if( department ){
                department.employees.push( employee )
                await department.save()
                employee.department = department
                return res.status(201).json({state:"Empleado creado con éxito",data:employee})
            }else{
                return res.status(404).json({state:"Empleado no pudo ser guardado porque no existe el departamento",data:null})
            }
        }catch(err){
          return res.status(500).json({state:"Error del servidor",data:err})
        }
    },
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
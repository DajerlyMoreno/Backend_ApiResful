// Controller of the Department
const Department = require('./../models/department')
const Employee = require('./../models/employee')

module.exports = {
    update:async(req,res)=>{
        const {idD} = req.params
        const {id,name,numEmployees,employees} = req.body
        
        try{
            const department = await Department.findByIdAndUpdate(idD,{$set:{id,name,numEmployees,employees}}, {new:true, runValidators: true})
            if (department) {
                return res.status(200).json({ state: "Departamento actualizado con éxito", data: department });
            } else {
                return res.status(404).json({ state: "Departamento no encontrado", data: null });
            }
        }catch(err){
          return res.status(501).json({state:"Error del servidor",data:err})
        }
    },
    delete: async (req, res) => {
        const { idD } = req.params;
        try {
            const department = await Department.findById(idD).populate('employees');
    
            if (!department) {
                return res.status(404).json({ state: "Departamento no encontrado", data: null });
            }

            await Employee.deleteMany({ _id: { $in: department.employees } });

            const result = await Department.deleteOne({ _id: idD });
            
            return res.status(200).json({ state: "Departamneto eliminado con éxito", data: result });
        } catch (err) {
            console.log(err);
            return res.status(501).json({ state: "Error del servidor", data: err });
        }
    }
}
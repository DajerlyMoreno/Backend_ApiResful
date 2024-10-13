// Controller of the Department
const Department = require('./../models/department')
const Employee = require('./../models/employee')
const jwt = require('jsonwebtoken')

const key = "Electiva:)"

module.exports = {
    update:async(req,res)=>{
        try {
            const token = req.headers.authorization.split(" ")[1]
            const payload = jwt.verify(token, key)
            if(Date.now() < payload.exp){
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
            }
            return res.status(401).json({error: "Token expired"})
        } catch (error) {
            return res.status(401).json({err: error.message})
        }
        
    },
    delete: async (req, res) => {
        try {
            const token = req.headers.authorization.split(" ")[1]
            const payload = jwt.verify(token, key)
            if(Date.now() < payload.exp){
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
            return res.status(401).json({error: "Token expired"})
        } catch (error) {
            return res.status(401).json({err: error.message})
        }
        
    }, 
    create : async (req, res) => {
        try {
            const token = req.headers.authorization.split(" ")[1]
            const payload = jwt.verify(token, key)
            if(Date.now() < payload.exp){
                const department = new Department(req.body)
                try {
                    const result = await department.save()
                    return res.status(200).json({state: true, data: result})
                } catch (error) {
                    return res.status(500).json({state: false, data: error})
                }
            }
            return res.status(401).json({error: "Token expired"})
        } catch (error) {
            return res.status(401).json({err: error.message})
        }
        
    },
    getAll : async (req, res) => {
        try {
            const result = await Department.find({})
            return res.status(200).json({state: true, data: result})
        } catch (error) {
            return res.status(500).json({state: false, data: null})
        }
    },
    getEmployeesOne: async (req, res) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const payload = jwt.verify(token, key);
    
            if (Date.now() < payload.exp ) {  
                try {
                    const departmentId = req.params.idD;
                    const employees = await Employee.find({ department: departmentId }).populate('department', 'name');  
                    if (employees.length === 0) {
                        return res.status(404).json({ state: false, message: "No employees found for this department." });
                    }
                    res.status(200).json({ state: true, data: employees });
                } catch (error) {
                    res.status(500).json({ state: false, message: error.message });
                }
            } else {
                return res.status(401).json({ error: "Token expired" });
            }
        } catch (error) {
            return res.status(401).json({ error: "Invalid token", message: error.message });
        }
    },
    "getSalaryByDepartment": async (req, res) => {
    const { idD } = req.params; // idD es el id del departamento
    try {
        const department = await Department.findById(idD).populate('employees');
        
        if (!department) {
            return res.status(404).json({ state: "Departamento no encontrado", data: null });
        }

        const employees = department.employees;
        
        const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);

        return res.status(200).json({ state: "Salarios calculados con éxito", totalSalary });
    } catch (err) {
        console.log("Error del servidor:", err);
        return res.status(500).json({ state: "Error del servidor", data: err });
    }
}

}

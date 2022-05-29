import StudentModel from '../models/Student_model.js';
export const getStudent = async (req, res) => {
    try {
        const student = await StudentModel.find();
        res.status(200).json(student)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createStudent = async (req, res) => {
const student = req.body;
const newStudent = new StudentModel(student);
try {
    const data = await newStudent.save();
    res.status(200).json(data);
} catch (error) {
    res.status(409).json({message: error.message})
}
}

export const getSingleStudent = async (req, res)=>{
    const student_id = req.params.id;
    try {
        const singleStudent = await StudentModel.findById(student_id)
        res.status(200).json(singleStudent)        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const editStudent = async (req, res) => {
    // const data = req.body;
    try {
        const data = await StudentModel.findByIdAndUpdate(
        {_id: req.params.id}, req.body, {new: true});
        if(data){
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
            }
}
export const deleteStudent = async (req, res)=>{
    const id = req.params.id
    try {
        let deleteData = await StudentModel.findByIdAndDelete(id);
        if(deleteData){
         res.status(200).json({message: 'Successfully Deleted!'});
        }
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}
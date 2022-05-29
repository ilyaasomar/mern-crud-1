import mongoose from 'mongoose';
const newSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
    type: String,
    required: true
    }
});
const StudentModel = mongoose.model("student_table", newSchema);
export default StudentModel;
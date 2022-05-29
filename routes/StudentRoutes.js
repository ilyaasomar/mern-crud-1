import express from "express";
const router = express.Router();
import {getStudent, createStudent, getSingleStudent, editStudent, deleteStudent} 
from '../controller/Student.js';
router.get("/", getStudent);

router.post("/add-student",createStudent);
router.get("/:id",getSingleStudent);
router.put("/edit/:id",editStudent);
router.delete("/delete/:id",deleteStudent);




export default router;
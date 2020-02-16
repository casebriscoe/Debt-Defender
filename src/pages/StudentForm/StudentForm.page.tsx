import React from 'react';
import StudentFormComponent from '../../components/StudentForm/StudentForm.component';
import { StudentsService } from '../../services/students.service';

export default function StudentFormPage() {

    const onSubmit = async (data) => {
        try {

            await StudentsService.saveStudentData(data);

        } catch (e) {

        }
    }



    return (
        <StudentFormComponent
            onSubmit={onSubmit}
        />
    )
}


import React from 'react';
import StudentFormComponent from '../../components/StudentForm/StudentForm.component';
import { StudentsService } from '../../services/students.service';
import { Formik } from 'formik';

export default function StudentFormPage({
    match,
    history
}) {

    console.log('the history ', history);
    const onSubmit = async (data) => {
        try {

            console.log('the data ', data)
            // await StudentsService.saveStudentData(data);
            history.push('/debt/4');

        } catch (e) {

        }
    }



    return (
        <Formik
            initialValues={{
                name: '',
                expected_income: 0,
                scholarships: 0,
                school_name: '',
                residency_status: '',
                semesters: 8,
                enrollment_status: ''
            }}
            onSubmit={onSubmit}
        >
            {({
                values: {

                },
                handleSubmit
            }) => (
                    <StudentFormComponent
                        onSubmit={handleSubmit}
                    />
                )}
        </Formik>

    )
}


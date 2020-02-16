import React, { useEffect, useState } from 'react'
import DebtDetailsComponent from '../../components/DebtDetails/DebtDetails.component';
import { DebtService } from '../../services/debt.service';
import { Formik } from 'formik';

const value = {
    tuition: {
        checked: true,
        value: 20000
    },
    room_and_board: {
        checked: true,
        value: 20000
    },
    off_campus_housing: {
        checked: true,
        value: 20000
    },
    transportation: {
        checked: true,
        value: 20000
    },
    books: {
        checked: true,
        value: 20000
    },
    dining: {
        checked: true,
        value: 20000
    },
    income: {
        checked: true,
        value: 20000
    },
    scholarships: {
        checked: true,
        value: 20000
    },
    debt: 80000,
    years: 1
}

export default function DebtDetailsPage({
    match
}) {

    const [
        initalstate,
        setInitalState
    ] = useState(value);

    useEffect(() => {
        const { id } = match.params;

        console.log('the id ', id);

        DebtService.getDebtData(id)
            .then((data) => {

                console.log("the data", data);
                if(data) setInitalState(data);


            })
            .catch((err) => console.log('the erro ', err))
    }, []);


    const job = { title: 'Senior Developer', salary: 15000 };
    const jobs = [job, job];

    const student = { name: 'John Doe', years_left: 6 };
    const students = [student, student];

    


    const onSubmit = () => {

    }


    return (
        <React.Fragment>
            {   
                <Formik
                    initialValues={initalstate}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                >
                    {({
                        values: {
                            tuition,
                            room_and_board,
                            off_campus_housing,
                            transportation,
                            books,
                            dining,
                            income,
                            scholarships,
                            debt,
                            years
                        },
                    }) => (
                            <DebtDetailsComponent
                                tuition={tuition}
                                room_and_board={room_and_board}
                                off_campus_housing={off_campus_housing}
                                transportation={transportation}
                                books={books}
                                dining={dining}
                                income={income}
                                scholarships={scholarships}
                                students={students}
                                jobs={jobs}
                                debt={debt}
                                years={years}
                            />
                        )}

                </Formik>


            }


        </React.Fragment>
    );
}

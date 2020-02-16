import { api } from "./http.service"

const getDebtData = async (studentId: number) => {
    try {

        const { data } = await api.get('/calculate_debt/', { params: { id: studentId } });

        console.log('the data from the server ', data);

        const {
            tuition,
            room_and_board,
            off_campus_housing,
            semesters,
            scholarships,
            books = "200",
            transportation,
            dining,
            income,
            principal,
            years
        } = data;

        return {
            tuition: {
                checked: true,
                value: tuition
            },
            room_and_board: {
                checked: true,
                value: room_and_board
            },
            off_campus_housing: {
                checked: true,
                value: off_campus_housing
            },
            transportation: {
                checked: true,
                value:transportation
            },
            books: {
                checked: true,
                value: books
            },
            dining: {
                checked: true,
                value: dining
            },
            income: {
                checked: true,
                value: income
            },
            scholarships: {
                checked: true,
                value: scholarships
            },
            semesters,
            debt: principal,
            years
            
        };

    } catch (e) {
        console.log('the error from the server', JSON.stringify(e))
    }
}



export const DebtService = {
    getDebtData
}
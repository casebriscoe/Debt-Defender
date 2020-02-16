import { api } from "./http.service"

const getDebtData = async (studentId: number) => {
    try {

        const { data } = await api.get('/get_student_info/', { params: { _id: studentId } });

        return data;

    } catch (e) {
        console.log('the error from the server', JSON.stringify(e))
    }
}



export const DebtService = {
    getDebtData
}
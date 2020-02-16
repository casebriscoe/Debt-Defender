import { api } from "./http.service"

const getDebtData = async (studentId: string) => {
    try {

        const { data } = await api.get('/get_debt_data', { params: { studentId } });

        return data;

    } catch (e) {

    }
}



export const DebtService = {
    getDebtData
}
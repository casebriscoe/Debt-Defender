import { api } from "./http.service"



const saveStudentData = async (_data) => {
    try {

        const { data } = await api.post('/login', _data);
        
        return data;

    } catch (e) {

    }
}



export const StudentsService = {
    saveStudentData
}
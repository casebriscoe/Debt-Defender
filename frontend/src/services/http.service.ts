import  axios from 'axios';
import { enviroment } from '../environment/environment';



export const api = axios.create({baseURL: enviroment.api});


import axios from "axios";

export const useAxios = () => {

    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
    });
    
    return { axios: instance };
};

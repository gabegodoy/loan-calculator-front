import axios from "axios";

export const useAxios = () => {

    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_URL || "http://localhost:8085/api/v1/",
    });
    
    return { axios: instance };
};

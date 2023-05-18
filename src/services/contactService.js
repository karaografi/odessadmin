import { axiosPrivate } from "../api/axios";

// Read all domains
export const getAllContacts = async () => {
    try {
        const response = await axiosPrivate.get('/ContactForms?Page=0&PageSize=20')
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};
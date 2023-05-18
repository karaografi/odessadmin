import { axiosPrivate } from "../api/axios";

// Read all domains
export const getAll = async () => {
    try {
        const response = await axiosPrivate.get('/DomainHostings?Page=0&PageSize=10')
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

// Create a new domain
export const addDomain = async (data) => {
    try {
        const response = await axiosPrivate.post('/DomainHostings',data)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
} 

// Edit domain
export const editDomain = async (id) => {
    try {
        const response = await axiosPrivate.put(`/DomainHostings/`,{ data: { id: id } })
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
}

// Delete domain
export const deleteDomain = async (id) => {
    alert(id)
    try {
        const response = await axiosPrivate.delete(`/DomainHostings/`, { data: { id: id } })
        return response.data;  
    } catch (error) {
        throw new Error(error.response.data.error);
    }
}

import { axiosPrivate } from "../api/axios";


export const deleteCourse = async (id) => {
    try {
        const response = await axiosPrivate.delete('/Courses/', { data: { "id": id } })
        return response.data;  
    } catch (error) {
        throw new Error(error.response.data.error);
    }
}



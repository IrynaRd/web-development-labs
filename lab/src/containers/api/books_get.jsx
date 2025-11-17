import api from "./books";

export const getBooks = async (params = {}) => {
    try {
        const response = await api.get('/', { params: params });
        return response.data || [];
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
}
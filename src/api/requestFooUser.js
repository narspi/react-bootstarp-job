import axios from "axios";

export const requestFooUser = async (id) => {
    const req = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await req.data;
}
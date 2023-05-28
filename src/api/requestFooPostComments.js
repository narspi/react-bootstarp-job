import axios from "axios";

export const requestFooPostComments = async (id) => {
    const req = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return await req.data;
}
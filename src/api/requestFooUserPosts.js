import axios from "axios";

export const requestFooUserPosts = async (id) => {
    const req = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    return await req.data;
}
import axios from "axios";

export const requestFooUserPosts = async (id) => {
    const req = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts?_embed=comments`);
    return await req.data;
}
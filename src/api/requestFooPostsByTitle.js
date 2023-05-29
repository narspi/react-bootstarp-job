import axios from "axios";

export const requestFooSearchTitle = async (title) => {
    const req = await axios.get(`https://jsonplaceholder.typicode.com/posts?title=${title}`);
    return await req.data;
}
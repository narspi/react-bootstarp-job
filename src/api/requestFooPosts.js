import axios from "axios";

export const requestFooPosts = async ({page, limit}) => {
    const req = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    return await req.data;
}
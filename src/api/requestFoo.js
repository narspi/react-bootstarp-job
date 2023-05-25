export const requestFoo = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=12")
    return await request.json();
}
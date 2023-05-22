export const delay = () => {
    const start = new Date().getTime();
    let end = new Date().getTime();
    while (end < start + 500) {
        end = new Date().getTime();
    }
}
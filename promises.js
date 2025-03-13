const dataPromise = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json());
};
dataPromise()
.then(data=>console.log(data));
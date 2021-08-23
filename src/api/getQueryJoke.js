const getQueryJoke = (query) => {
    return fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then(response => response.json())
}
export default getQueryJoke;

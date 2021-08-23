
const getCategories = () => {
   return fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
}

export default getCategories
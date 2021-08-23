const getUser = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'John', email: 'gmail@gmail.com' })
    }, 3500)
})
export default getUser
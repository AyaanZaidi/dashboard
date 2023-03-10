import axios from 'axios'

let HandleApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

let Get = (endPoint) => (
    HandleApi.get(endPoint)
)

let GetIdBy = (endPoint, id) => (
    HandleApi.get(`${endPoint} / ${id}`)
)
let Post = (endPoint, kgf) => (
    HandleApi.get(endPoint, kgf)
)
let Put = () => (
    HandleApi.get(endPoint)
)
let Del = () => (
    HandleApi.get(endPoint)
)
export { Get, GetIdBy, Post, Put, Del }
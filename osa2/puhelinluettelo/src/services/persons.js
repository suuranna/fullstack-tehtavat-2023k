import axios from "axios"
const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = personObject => {
    return axios.post(baseUrl, personObject)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, create, remove}
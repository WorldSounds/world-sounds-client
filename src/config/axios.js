import axios from 'axios'

const genres = axios.create({
  baseURL: 'http://localhost:4000'
})

export default genres
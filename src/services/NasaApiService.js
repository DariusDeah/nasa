const { default: axios } = require('axios')

const apiKey = 'api_key=DLqq9FfE0gGsk9u1fjzjt7hhPp2x0TNFhN8t8tdR'

const nasaApi = axios.create({
  baseUrl: 'api.nasa'
})

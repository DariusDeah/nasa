import { logger } from '../utils/Logger'
import axios from 'axios'

const apiKey = 'api_key=DLqq9FfE0gGsk9u1fjzjt7hhPp2x0TNFhN8t8tdR'

// eslint-disable-next-line no-undef
const nasaApi = axios.create({
  baseURL: 'https://api.nasa/gov/planetary/'
})

class NasaApiService {
  async getNasaData(query) {
    const res = await nasaApi.get(`apod?${apiKey}&date=${query}`)
    logger.log(res)
  }
}
export const nasaApiService = new NasaApiService()

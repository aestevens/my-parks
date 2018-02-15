import axios from 'axios'
import { API_KEY } from '../api-key'

export const FETCH_PARKS = 'fetch_parks'

const ROOT_URL = 'https://developer.nps.gov/api/v1/parks'

export fetchParks = (stateCode) => {
  const request = axios.get(`${ROOT_URL}/${API_KEY}&stateCode=${stateCode}`)

  return {
    type: FETCH_PARKS,
    payload: request
  }
}

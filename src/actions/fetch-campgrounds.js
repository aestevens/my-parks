import axios from 'axios'
import { API_KEY } from '../api-key'

export const FETCH_CAMPGROUNDS = 'fetch_campgrounds'

const ROOT_URL = 'https://developer.nps.gov/api/v1/campgrounds'

export function fetchCampgrounds (stateCode) {
  const request = axios.get(`${ROOT_URL}?api_key=${API_KEY}&stateCode=${stateCode}`)

  return {
    type: FETCH_CAMPGROUNDS,
    payload: request
  }
}

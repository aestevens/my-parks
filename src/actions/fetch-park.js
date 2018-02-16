import axios from "axios";
import { API_KEY } from "../api-key";

export const FETCH_PARK = 'fetch_park';

const ROOT_URL = 'https://developer.nps.gov/api/v1/parks';

export function fetchPark(parkCode) {
  const request = axios.get(`${ROOT_URL}?api_key=${API_KEY}&parkCode=${parkCode}`);

  return {
    type: FETCH_PARK,
    payload: request
  }
}

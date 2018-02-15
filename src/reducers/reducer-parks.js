import { FETCH_PARKS } from '../actions/fetch-parks'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PARKS:
      return action.payload.data.data
    default:
      return state
  }
  return state
}

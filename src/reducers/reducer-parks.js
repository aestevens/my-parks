import { FETCH_PARKS } from '../actions/fetch-parks'
import { FETCH_CAMPGROUNDS } from '../actions/fetch-campgrounds'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PARKS:
      return action.payload.data.data
    case FETCH_CAMPGROUNDS:
      return action.payload.data.data
    default:
      return state
  }
  // return state
}

import { FETCH_PARKS } from '../actions/fetch-parks'
import { FETCH_CAMPGROUNDS } from '../actions/fetch-campgrounds'
import { FETCH_PARK } from '../actions/fetch-park';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PARKS:
      return {
        parks: action.payload.data.data,
        filteredParks: action.payload.data.data,
        areParks: true
      }
    case FETCH_CAMPGROUNDS:
      return {
        parks: action.payload.data.data,
        filteredParks: action.payload.data.data,
        areParks: false
      }
    case FETCH_PARK:
      return { ...state,
        currentPark: action.payload.data.data[0]
      }
    default:
      return state
  }
}

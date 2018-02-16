import { ADD_FAVORITE } from '../actions/fetch-parks'
import { REMOVE_FAVORITE } from '../actions/fetch-campgrounds'

export default function(state = [], action) {
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
    default:
      return state
  }
}

import { ADD_FAVORITE } from '../actions/add-favorite'
import { REMOVE_FAVORITE } from '../actions/remove-favorite'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [ ...state, action.payload ]
    case REMOVE_FAVORITE:
      return state.filter( favorite => favorite.id !== action.payload)
    default:
      return state
  }
}

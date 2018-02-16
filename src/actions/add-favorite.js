export const ADD_FAVORITE = 'add_favorite'

export function addFavorite (parkOrCampground) {
  return {
    type: ADD_FAVORITE,
    payload: parkOrCampground
  }
}

export const REMOVE_FAVORITE = 'remove_favorite'

export function removeFavorite (id) {
  return {
    type: REMOVE_FAVORITE,
    payload: id
  }
}

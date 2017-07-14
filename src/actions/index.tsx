

export const SELECT_STOCK = "SELECT_STOCK"

export function selectStock(id) {
  return { type: SELECT_STOCK, payload: id }
}
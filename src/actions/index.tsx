

export const SELECT_STOCK = "SELECT_STOCK"
export const DELETE_STOCK = "DELET_STOCK"

export function selectStock(id: number) {
  return { type: SELECT_STOCK, payload: id }
}

export function deleteStock(id: number) {
  return { type: DELETE_STOCK, payload: id }
}
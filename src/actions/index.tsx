

export const SELECT_STOCK = "SELECT_STOCK"
export const DELETE_STOCK = "DELET_STOCK"
export const ADD_STOCK = "ADD_STOCK"

export function selectStock(id: number) {
  return { type: SELECT_STOCK, payload: id }
}

export function deleteStock(id: number) {
  return { type: DELETE_STOCK, payload: id }
}

export function addStock(ticker: string) {
  console.log("input = ", ticker)
  return { type: ADD_STOCK, payload: ticker }
}
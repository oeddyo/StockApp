export const SELECT_STOCK = "SELECT_STOCK";
export const DELETE_STOCK = "DELET_STOCK";
export function selectStock(id) {
    return { type: SELECT_STOCK, payload: id };
}
export function deleteStock(id) {
    return { type: DELETE_STOCK, payload: id };
}
//# sourceMappingURL=index.js.map
export default (state={}, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, cart: [action.payload]
            }
        case 'GET_LIST' :
            return {
                ...state, list: action.payload
            }
        default:
            return state;
    }
}
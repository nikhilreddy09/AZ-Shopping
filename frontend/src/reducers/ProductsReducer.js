export default (state={}, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS' :
            return {
                ...state, products: action.payload
            }
        case 'SINGLE_PRODUCT':
            return{
                ...state, singleProduct: action.payload
            }
        case 'DELETE_AD': 
            return{
                ...state, delete: action.payload
            }
        default:
            return state;
    }
}
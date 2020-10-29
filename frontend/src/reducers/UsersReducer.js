export default (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return {...state};
        case 'LOGIN_USER':
            return {...state, loggedin: action.payload}
        case 'USER_ADS':
            return {...state, ads: action.payload}
        default:
            return state;
    }
}
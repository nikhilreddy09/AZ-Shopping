import api from '../apis/index'
import history from '../history'
export const register = (fields) => async dispatch => {
    const response = await api.post('/users/add', {fields})
    dispatch({type: 'CREATE_USER', payload: response.data})
}

export const login = (fields) => async dispatch => {
    console.log(fields)
    const response = await api.post('/users/login', fields)
    console.log(response.data)
    dispatch({type: 'LOGIN_USER', payload: response.data})
    history.push('/products/list')
}

export const createProduct = (fields, token) => async dispatch  => {
    const response = await api.post('/products/add', fields, {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'CREATE_PRODUCT', payload: response.data})
}

export const getProducts = (token) => async dispatch => {
    const response = await api.get('/products/list', {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'GET_PRODUCTS', payload: response.data})
}


export const getCart = (token) =>  async dispatch => {
    const response = await api.get('/products/addlist', {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'GET_LIST', payload: response.data})
}

export const getuserads = (data,token) => async dispatch => {
    const response = await api.get(`/products/getadswithid/${data}`, {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'USER_ADS', payload: response.data})
}

export const addToCart = (fields, token) => async dispatch => {
    const response = await api.post('/products/addlist', fields, {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'ADD_TO_CART', payload: response.data})
}


export const singleProduct = (token,fields) => async dispatch => {
    console.log(fields)
    const response = await api.get(`/products/single/${fields.id}`,{
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'SINGLE_PRODUCT', payload: response.data})
}

export const delUserads = (id,token) => async dispatch => {
    console.log(id)
    console.log(token)
  const response =   await api.delete(`/products/ad/${id}`, {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'DELETE_AD', payload: response.data})
}

export const createBooking = (data,token) =>  async dispatch => {
    console.log(data)
    const response = await api.post('/products/checkout', data, {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'BOOKING', payload: response.data})
}
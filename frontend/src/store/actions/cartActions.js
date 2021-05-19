import axios from 'axios';
import {ADD_TO_CART, REMOVE_ALL_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO} from '../../constants/cartConstants';
import sound from "../../assets/piece-of-cake-611.mp3";
import {filterItem} from "../reducers/cartReducers";


export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const userId = getState().cart.userId
    const { data } = await axios.get(`/api/v1/product/${id}`)


    const audio = new Audio(sound);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.stock,
            quantity,
            userId
        }
    })
    dispatch(filterItem())
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_CART,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data
    })

    localStorage.setItem('shippingInfo', JSON.stringify(data))

}

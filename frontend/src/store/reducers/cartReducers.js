import {
    ADD_TO_CART,
    FILTER_ITEM,
    FILTER_ITEM2,
    REMOVE_ALL_CART,
    REMOVE_ITEM_CART,
    SAVE_SHIPPING_INFO, USER_ID
} from '../../constants/cartConstants';



export const filterItem = () => {
    return {
        type: FILTER_ITEM,
    }
}
export const filterItem2 = (cartArr) => {
    return {
        type: FILTER_ITEM2,
        cartArr,
    }
}
export const setUserId = (id) => {
    return {
        type: USER_ID,
        id
    }
}


const initialState = {
    cartItems: [],
    shippingInfo: {}
}


export const cartReducer = (state = {cartItems: [], filterItems: [], userId: null, shippingInfo: {}}, action) => {
    switch (action.type) {
        case FILTER_ITEM: {
            return {
                ...state, filterItems: state.cartItems.filter(i => i.userId === state.userId)
            }
        }
        case FILTER_ITEM2: {
            return {
                ...state, filterItems: action.cartArr.filter(i => i.userId === state.userId)
            }
        }
        case USER_ID:
            return {
                ...state, userId: action.id
            }
        case ADD_TO_CART:
            const item = action.payload;
            const isItemExist = state.cartItems.find(i => i.product === item.product)
            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product !== action.payload),
                filterItems: state.filterItems.filter(i => i.product !== action.payload)
            }
        case REMOVE_ALL_CART:
            return {
                ...state,
                cartItems: []
            }
        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }
        default:
            return state
    }
}

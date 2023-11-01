// import { ActionTypes } from "../constants/actionType";

const initialState = {
    loading: false,
    data: {},
    productLoading: false,
    productData: {},
    fetchCartData: [],
    fetchCartDataLoading: false,
    quantity: [],
    order_detail_reducer: '',
    fetch_order_detail: '',
    user: [],
    temp_data: '',
};
const produtsReducer = (state = initialState, action) => {
    switch (action.type) {

        // saga
        // PRODUCTS

        case "FETCH_DATA_START":
            return { ...state, loading: true, };
        case "FETCH_DATA_SUCCESS":
            return { ...state, loading: false, data: action.payload, };
        case "FETCH_DATA_FAILURE":
            return { ...state, loading: false };

        // PRODUCT_DETAIL 

        case "FETCH_SINGLE_DATA":
            return { ...state, productLoading: true, };
        case "FETCH_SINGLE_DATA_SUCCESS":
            return { ...state, productLoading: false, productData: action.payload };
        case "FETCH_SINGLE_DATA_FAILURE":
            return { ...state, productLoading: false };
        default:
            return state;

        // FETCH_CART_DATA

        case "SET_DATA2":
            return {
                ...state, fetchCartDataLoading: false,
            }
        case "FETCH_CART_DATA":
            return {
                ...state, productData: action.payload,
                loading: false
            };

        // INCREMENT_DATA

        case "INCRESE_QUENTITY2":

            // console.log(action.payload)
            // ...state, increment: action.payload, loading: false
            return {
                ...state,
                temp_data: action.payload,

            };
        // CLEAR_TEMP 
        case "CLEAR_TEMP":
            return {
                ...state,
                temp_data: [],
            };


        //  DECREMENT_DATA
        // case "INCRESE_QUENTITY2":
        //     return {
        //         ...state,
        //         carts: state.data.map((item) => {
        //             if (item.productId === action.payload.productId) {
        //                 return {
        //                     ...item,
        //                     quantity: item.quantity + action.payload.quantity,
        //                 };
        //             }
        //             return item;
        //         }),
        //     };

        // ORDER DETAIL

        case "ORDER_DETAIL":
            return { ...state }
        case "SET_ORDER_DETAIL":
            return { ...state, order_detail_reducer: action.payload }

        // FETCH ORDER DETAIL

        case "SHOW_DETAIL_DATA":
            return { ...state, fetch_order_detail: action.payload }
    }
}
export default produtsReducer
import { call, put, takeLatest } from "redux-saga/effects";
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";
import { axiosInstance } from "../../utils/ApiInstance";
import { fetchCartDataFailure, postCartData } from "../actions/produtsAction";
    
const postDataApi = async (data) => {
    // console.log(data)
    const response = await axiosInstance.post(`/cartItem`, data[0]);
    // console.log(response.data)

    return response.data
}

function* cartData(cartData) {
    // console.log(cartData.payload)
    try {
        const data = yield call(postDataApi, [cartData.payload]);
        // console.log(data)
        if (data.message == 'This product is already in your cart') {
            toast.warning('This product is already in your cart...', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast.success('Add to cart successfully...', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        yield put(postCartData(data));
    } catch (error) {
        console.error(error);
        yield put(fetchCartDataFailure());
    }
}
export default function* watchCartPostData() {
    yield takeLatest("SET_DATA", cartData);
}
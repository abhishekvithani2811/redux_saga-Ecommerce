import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/ApiInstance";

const CallApi = async(id) => {
    const response =await axiosInstance.delete(`http://192.168.1.143:3002/cartItem/${id}`)
    console.log(response)
}

function* DeleteCart1(action) {
    console.log(action.payload)
    try {
        const data = yield call(CallApi,[action.payload])
  
    } catch (error) {
        console.log(error)
    }
}

export default function* DeleteCart() {
    yield takeLatest("DELETE_CART", DeleteCart1)
}
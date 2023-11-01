import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/ApiInstance";
import { fetchCartData, fetchCartDataFailure } from "../actions/produtsAction";

export const fetchCartApi = async (data) => {
    const response = await axiosInstance.get("/cartItem", data)
    return response.data
}

function* fetchData1() {
    try {
        const data = yield call(fetchCartApi)
        // console.log(data)
        yield put(fetchCartData(data))
    } catch (error) {
        console.log(error)
        yield put(fetchCartDataFailure)
    }
}

export default function* fetchCartData1() {
    yield takeLatest("SET_DATA2", fetchData1)
}

// const fetchCartApi = async(data) => {
//     const response = await axiosInstance.get("/cartItem",data)
//     return response.data
// }


// console.log(data,"hfg");
// console.log(error,"error");

// console.log(isLoading,"dbf");

// function* fetchData1() {
//     try {
//         const data = yield call(fetchCartApi)
//         // console.log(data)
//         yield put(fetchCartData(data))
//     } catch (error) {
//         console.log(error)
//         yield put(fetchCartDataFailure)
//     }
// }

// export default function* fetchCartData1() {
//     yield takeLatest("SET_DATA2", fetchData1)
// }
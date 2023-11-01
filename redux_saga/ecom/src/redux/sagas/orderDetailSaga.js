import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/ApiInstance";
import { setOrderDetail } from "../actions/produtsAction";

const callApi = async(data) => {
    console.log(data)
    // const response = await axiosInstance.get("/cartItem")
    const response = await axiosInstance.patch("/details",data[0])
    console.log("order deail saga response:::::",response.data)
    return response
}

function* orderDetail2(action) {
    console.log("order deail saga payload::::::::",action.payload)
    try {
        const data = yield call(callApi,[action.payload])
        console.log("order deail saga data::::::::",data)
        yield put(setOrderDetail(data))
    } catch (error) {
        console.log(error, "error")
    }
}

export default function* orderDetail() {
    yield takeLatest("ORDER_DETAIL", orderDetail2);
}
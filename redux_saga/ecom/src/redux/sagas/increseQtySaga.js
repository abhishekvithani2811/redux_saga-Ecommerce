import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/ApiInstance";
import { fetchIncQtyFailure, increseQuantity12 } from "../actions/produtsAction";

export const incQty = async (actions) => {
    const prodId = actions[0].productId;
    const quantity = actions[0].quantity;

    const response = await axiosInstance
        .patch(`cartItem/${prodId}`, {
            quantity: quantity + 1,
        })
    try {
        return response
    } catch (error) {
        console.log(error)
    }
}

export function* increseQuantity2(actions) {
    console.log(actions.payload);
    try {
        const data = yield call(incQty, [actions.payload])
        console.log(data)
        yield put(increseQuantity12(data))
    } catch (error) {
        console.log(error)
        yield put(fetchIncQtyFailure(error))
    }
}

export default function* increseQuantity() {
    console.log("object")
    yield takeLatest("INCRESE_QUENTITY", increseQuantity2)
}
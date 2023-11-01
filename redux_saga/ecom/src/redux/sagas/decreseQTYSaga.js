import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/ApiInstance";
import { decreseQuantity12, fetchDecQtyFailure, fetchIncQtyFailure } from "../actions/produtsAction";

const decQty = async (actions) => {
    const prodId = actions[0].productId;
    const quantity = actions[0].quantity;

    const response = await axiosInstance
        .patch(`cartItem/${prodId}`, {
            quantity: quantity - 1,
        })
    try {
        return response
    } catch (error) {
        console.log(error)
    }
}

function* decreseQuantity2(actions) {
    console.log(actions.payload);
    try {
        const data = yield call(decQty, [actions.payload])
        console.log(data)
        yield put(decreseQuantity12(data))
    } catch (error) {
        console.log(error)
        yield put(fetchDecQtyFailure(error))
    }
}

export default function* decreseQuantity() {
    console.log("object")
    yield takeLatest("DECRESE_QUANTITY", decreseQuantity2)
}
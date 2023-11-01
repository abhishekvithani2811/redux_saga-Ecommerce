import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/ApiInstance";
import { ShowDetailData } from "../actions/produtsAction";

const CallApi = async () => {
    const response = await axiosInstance.get("/myProfile")
    // console.log(response.data)
    return response.data
}

function* FetchDetail() {
    try {
        const data = yield call(CallApi)
        // console.log('data-----', data);
        yield put(ShowDetailData(data))
        
    } catch (error) {
        console.log(error)
    }
}
export default function* FetchOrderDetail() {
    yield takeLatest("FETCH_DETAIL_ACTION", FetchDetail)
}
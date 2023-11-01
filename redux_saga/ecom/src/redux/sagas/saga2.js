import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSingleDataFailure, fetchSingleDataSuccess } from "../actions/produtsAction";
import axios from "axios";

const fetchDataApi = async ( id) => {
    // console.log(id)
    const response = await axios.get(`http://192.168.1.143:3002/user/product/${id}`);
    // console.log(response)                                     
    return response.data    
    // const resa = await fetch(`http://192.168.1.143:3002/user/product/${id}`).then(async (response) => {
    //     const res = await response.json()
    //     console.log(res)
    //     return res
    // }).catch((err) => {
    //     console.log("err", err);
    // })
}

function* fetchDataSaga(id) {
    // console.log(action.payload)
    try {
        const data = yield call(fetchDataApi,[id.payload]);
        // console.log(data);
        yield put(fetchSingleDataSuccess(data));
    } catch (error) {
        console.error(error);
        yield put(fetchSingleDataFailure());
    }
}
export default function* watchSingleFetchData() {
    yield takeLatest("FETCH_SINGLE_DATA", fetchDataSaga);
}
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDataFailure, fetchDataSuccess } from "../actions/produtsAction";


const fetchDataApi = () =>

  fetch("http://192.168.1.143:3002/user/product").then((response) =>
    response.json()
  );

function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataApi);
    // console.log(data);
    yield put(fetchDataSuccess(data));
    // console.log("fetchDataSaga");
  } catch (error) {
    console.error(error);
    yield put(fetchDataFailure());
  } 
} 

export default function* watchFetchData() {
  yield takeLatest("FETCH_DATA", fetchDataSaga);
  // console.log("watchFetchData");
}

// export default function* rootSaga1() {
//   yield watchFetchData();
//   console.log("rootSaga");
// }

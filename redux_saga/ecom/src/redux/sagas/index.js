import { all, fork } from 'redux-saga/effects';
import watchFetchData from './saga';
import watchSingleFetchData from './saga2';
import watchCartPostData from './cartSaga';
import fetchCartData1 from './fetchCartSaga';
import increseQuantity from './increseQtySaga';
import orderDetail from './orderDetailSaga';
import FetchOrderDetail from './fetchOrderDetailSaga';
import decreseQuantity from './decreseQTYSaga';
import DeleteCart from './deleteCartSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchData),
        fork(watchSingleFetchData),
        fork(watchCartPostData),
        fork(fetchCartData1),
        fork(increseQuantity),
        fork(decreseQuantity),
        fork(orderDetail),
        fork(FetchOrderDetail),
        fork(DeleteCart),
    ])
}  
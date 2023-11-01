import { applyMiddleware, legacy_createStore as createStore,combineReducers  } from "redux";
import reducers from './redux/reducers/index'
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage';
import rootSaga from "./redux/sagas";
import produtsReducer from "./redux/reducers/productsReduser";
import {
    persistReducer
} from 'redux-persist';

const persistConfig = {
    key: 'counter',
    storage,
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store   

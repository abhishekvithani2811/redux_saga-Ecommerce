import { ActionTypes } from "../constants/actionType";

// saga
export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = () => ({
  type: "FETCH_DATA_FAILURE",
});

export const removeData = () => ({
  type: "REMOVE_FETCH_DATA",
});
// single product
export const fetchSingleData = (id) => ({
  type: "FETCH_SINGLE_DATA",
  payload: id,
});

export const fetchSingleDataSuccess = (data) => ({
  type: "FETCH_SINGLE_DATA_SUCCESS",
  payload: data,
});

export const fetchSingleDataFailure = () => ({
  type: "FETCH_SINGLE_DATA_FAILURE",
});

export const removeSingleData = () => ({
  type: "REMOVE_SINGLE_FETCH_DATA",
});
// product detail  

export const setProducts = (produts) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: produts,
  };
  // console.log("produts",produts)
}

export const selectedProducts = (produts) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: produts
  };
}

// cart saga
export const cartData = (data) => {
  return {
    type: 'SET_DATA',
    payload: data,
  }
}
export const postCartData = (cartData) => {
  return {
    type: 'SET_CART_DATA',
    payload: cartData,
  };
};

export const fetchCartDataFailure = () => {
  return {
    type: "FETCH_CART_DATA_FAILURE",
  }
};
// fetch data cart

export const cartData2 = () => {
  return {
    type: "SET_DATA2"
  }
}
export const fetchCartData = (data) => {
  return {
    type: "FETCH_CART_DATA",
    payload: data,
  }
};
// 

// INCRESE_QUENTITY
export const increseQuantity = (data) => {
  return {
    type: "INCRESE_QUENTITY",
    payload: data,
  }
}
export const increseQuantity12 = (data) => {
  return {
    type: "INCRESE_QUENTITY2",
    payload: data,
  }
}
export const clear_temp = () => {
  return {
    type: "CLEAR_TEMP",
  }
}

export const fetchIncQtyFailure = () => {
  return {
    type: "FETCH_INC_QTY_FAILURE",
  }
};

// DECREMENT_QUENTITY

export const DecreseQuantity = (data) => {
  return {
    type: "DECRESE_QUANTITY",
    payload: data,
  }
}
export const decreseQuantity12 = (data) => {
  return {
    type: "INCRESE_QUENTITY2",
    payload: data,
  }
}
export const fetchDecQtyFailure = () => {
  return {
    type: "FETCH_INC_QTY_FAILURE",
  }
};

// ORDER DETAIL

export const orderDetailAction = (order) => {
  console.log(order)
  return {
    type: "ORDER_DETAIL",
    payload: order,
  };
};
export const setOrderDetail = (data) => {
  console.log("action data::::::", data)
  return {
    type: "SET_ORDER_DETAIL",
    payload: data,
  };
};

// FETCH ORDER DETAIL DATA

export const FetchDetailAction = () => {
  return {
    type: "FETCH_DETAIL_ACTION",
  }
}

export const ShowDetailData = (data) => {
  return {
    type: "SHOW_DETAIL_DATA",
    payload: data,
  }
}

// DELETE CART DATA

export const DeleteCartData = (data) => {
  return{
    type:"DELETE_CART",
    payload:data
  }
}

// LOGOUT



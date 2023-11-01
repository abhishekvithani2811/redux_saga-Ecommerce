import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react'
import { useQuery } from "react-query"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../utils/ApiInstance';
import { fetchCartApi } from '../redux/sagas/fetchCartSaga';
import { incQty, increseQuantity2 } from '../redux/sagas/increseQtySaga';
import { DecreseQuantity, DeleteCartData, cartData2, clear_temp, increseQuantity } from '../redux/actions/produtsAction';

const AddToCart = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const product = useSelector((state) => state.allProducts.productData)

  const FetchProduct = async () => {
    dispatch(cartData2())
  }
  useEffect(() => {
    FetchProduct()
  }, [])

  const temp_msg = (useSelector((state) => state?.allProducts?.temp_data?.data?.message))
  const { data: data, refetch } = useQuery("items", fetchCartApi)
  console.log("data1", data);

  // increment

  const handleIncreaseQuantity = async (productId, quantity) => {
    if (quantity >= 1) {
      dispatch(increseQuantity({ productId, quantity }))
      if (temp_msg == "Cart item updated successfully") {
        dispatch(clear_temp())
        refetch()
      }
    }
  };

  const handleDecreaseQuantity = async (productId, quantity) => {
    if (quantity >= 1) {
      dispatch(DecreseQuantity({ productId, quantity }))

      refetch()

    }
  };


  //total  
  const TotalPrice = (price, quantity) => {
    return Number(price * quantity).toLocaleString("en-US");

  };
  // all total     
  const calculateTotalCart = (items) => {
    // console.log(items)
    if (!Array.isArray(items)) {
      return 0;
    }
    var total = 0;
    items.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };
  const RemoveProd = (id) => {
    try {
      dispatch(DeleteCartData(id))
      refetch( )
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   handleIncrementQuantity();
  // }, [])
  // decrement
  return (
    <div>

      <body class="bg-gray-100">
        <div class="container mx-auto mt-10">
          <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                <h2 class="font-semibold text-2xl mr-3 ">
                  {data?.length}
                  Items</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5 pl-28">Product Details</h3>
                <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>
              {/* map */}
              {data && data?.length && data?.map(data => {
                // var total1 = item.price * item.quantity

                return (
                  <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex w-2/5">

                      {/* <!-- product --> */}
                      <div class="w-24">
                        <img class="h-24" src={data.productimage} alt="" />
                      </div>
                      <div class="flex flex-col justify-between ml-4 flex-grow">
                        <span class="font-bold text-sm  pl-5">{data.name}</span>
                        {/* <span class="text-red-500 text-xs">Apple</span> */}
                        <a href="#" class="font-semibold hover:text-gray-500 text-red-500 text-xs underline	" onClick={() => RemoveProd(data.productId)}>Remove</a>
                      </div>
                    </div>
                    <div class="flex justify-center w-1/5">
                      <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"
                        onClick={() => handleDecreaseQuantity(data.productId, data.quantity)}
                      ><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />

                      </svg>

                      <input class="mx-2 border text-center w-8" type="text" value={data.quantity} />

                      <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"
                        onClick={() => { handleIncreaseQuantity(data.productId, data.quantity) }}
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span class="text-center w-1/5 font-semibold text-sm">${data.price}</span>
                    <span class="text-center w-1/5 font-semibold text-sm">
                      $
                      {TotalPrice(data.price, data.quantity)}
                    </span>

                  </div>

                )
              })}


              <Link to='/' class="flex font-semibold text-indigo-600 text-sm mt-10">

                <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" class="w-1/4 px-8 py-10">
              <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
              <div class="flex justify-between mt-4 mb-5  ">
                <span class="font-semibold text-xl ">$ {calculateTotalCart(data).toFixed(2)}</span>
              </div>
              <div>
                <label class=" font-semibold  inline-block mb-3 underline-offset-2 decoration-green-200 text-lg	 	 uppercase font-serif
">Shipping</label>
                <select class="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div class="py-10">
                <label for="promo" class="uppercase font-serif font-semibold inline-block mb-3 text-lg">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
              </div>
              <button class="bg-red-500 px-5 py-2 text-sm  uppercase   hover:bg-red-400	font-semibold
	">Apply</button>
              <div class="border-t mt-8">
                <button type='submit' class="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span className=' ml-3 font-bold'>
                    ${calculateTotalCart(data) + 10}
                  </span>
                </button>
                <button class="bg-indigo-500 font-semibold hover:bg-indigo-600  py-3 text-sm text-white uppercase w-full" onClick={() => navigate(`/checkOut`)}>Checkout</button>
              </div>
            </div>

          </div>
        </div>
      </body>

    </div>
  )

  // Rest of your component code
};

// const AddToCart = () => {

//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const product = useSelector((state) => state.allProducts.productData)
//   const qty = (useSelector((state) => state.allProducts.productData))
//   const FetchProduct = async () => {
//     dispatch(cartData2())
//   }
//   useEffect(() => {
//     FetchProduct()
//   }, [])
//   // console.log(useSelector((state) => state))
//   // const data = useSelector((state)=>state.allProducts.increment.data.cartItem)

//   const{data,error,isLoading} = useQuery("items",fetchCartApi)
//   // console.log(data);
//   console.log(data, "hfg");
// console.log(error, "error");

// console.log(isLoading, "dbf");
//   // increment 
//   const handleIncreaseQuantity = async (productId, quantity) => {
//     // console.log(quantity)
//     // console.log(productId)
//     // console.log("handleDecreaseQuantity")
//     if (quantity >= 1) {
//       dispatch(increseQuantity({ productId, quantity }))
//     }
//   };
//   const handleDecreaseQuantity = async (productId, quantity) => {
//     console.log(quantity)
//     console.log(productId)
//     // console.log("handleDecreaseQuantity")
//     if (quantity >= 1) {
//       dispatch(DecreseQuantity({ productId, quantity }))
//     }
//   };


//   //total  
//   const TotalPrice = (price, quantity) => {
//     return Number(price * quantity).toLocaleString("en-US");

//   };
//   // all total
//   const calculateTotalCart = (items) => {
//     // console.log(items)
//     if (!Array.isArray(items)) {
//       return 0;
//     }
//     var total = 0;
//     items.forEach((item) => {
//       total += item.quantity * item.price;
//     });
//     return total;
//   };
//   const RemoveProd = (id) => {
//     try {
//       dispatch(DeleteCartData(id))
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   // useEffect(() => {
//   //   handleIncrementQuantity();
//   // }, [])
//   // decrement
//   return (
//     <div>

//       <body class="bg-gray-100">
//         <div class="container mx-auto mt-10">
//           <div class="flex shadow-md my-10">
//             <div class="w-3/4 bg-white px-10 py-10">
//               <div class="flex justify-between border-b pb-8">
//                 <h1 class="font-semibold text-2xl">Shopping Cart</h1>
//                 <h2 class="font-semibold text-2xl mr-3 ">{product?.length}  Items</h2>
//               </div>
//               <div class="flex mt-10 mb-5">
//                 <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5 pl-28">Product Details</h3>
//                 <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
//                 <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
//                 <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
//               </div>
//               {product && product?.length && product?.map(item => {
//                 var total1 = item.price * item.quantity

//                 return (
//                   <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//                     <div class="flex w-2/5">

//                       {/* <!-- product --> */}
//                       <div class="w-24">
//                         <img class="h-24" src={item.productimage} alt="" />
//                       </div>
//                       <div class="flex flex-col justify-between ml-4 flex-grow">
//                         <span class="font-bold text-sm  pl-5">{item.name}</span>
//                         {/* <span class="text-red-500 text-xs">Apple</span> */}
//                         <a href="#" class="font-semibold hover:text-gray-500 text-red-500 text-xs underline	" onClick={() => RemoveProd(item.productId)}>Remove</a>
//                       </div>
//                     </div>
//                     <div class="flex justify-center w-1/5">
//                       <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"
//                         onClick={() => handleDecreaseQuantity(item.productId, item.quantity)}
//                       ><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />

//                       </svg>

//                       <input class="mx-2 border text-center w-8" type="text" value={item.quantity} />

//                       <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"
//                         onClick={() => { handleIncreaseQuantity(item.productId, item.quantity) }}
//                       >
//                         <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
//                       </svg>
//                     </div>
//                     <span class="text-center w-1/5 font-semibold text-sm">${item.price}</span>
//                     <span class="text-center w-1/5 font-semibold text-sm">
//                       $
//                       {TotalPrice(item.price, item.quantity)}
//                     </span>

//                   </div>

//                 )
//               })}



//               <Link to='/' class="flex font-semibold text-indigo-600 text-sm mt-10">

//                 <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
//                 Continue Shopping
//               </Link>
//             </div>

//             <div id="summary" class="w-1/4 px-8 py-10">
//               <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//               <div class="flex justify-between mt-4 mb-5  ">
//                 <span class="font-semibold text-xl ">$ {calculateTotalCart(product).toFixed(2)}</span>
//               </div>
//               <div>
//                 <label class=" font-semibold  inline-block mb-3 underline-offset-2 decoration-green-200 text-lg	 	 uppercase font-serif
// ">Shipping</label>
//                 <select class="block p-2 text-gray-600 w-full text-sm">
//                   <option>Standard shipping - $10.00</option>
//                 </select>
//               </div>
//               <div class="py-10">
//                 <label for="promo" class="uppercase font-serif font-semibold inline-block mb-3 text-lg">Promo Code</label>
//                 <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
//               </div>
//               <button class="bg-red-500 px-5 py-2 text-sm  uppercase   hover:bg-red-400	font-semibold
// 	">Apply</button>
//               <div class="border-t mt-8">
//                 <button type='submit' class="flex font-semibold justify-between py-6 text-sm uppercase">
//                   <span>Total cost</span>
//                   <span className=' ml-3 font-bold'>
//                     ${calculateTotalCart(product) + 10}
//                   </span>
//                 </button>
//                 <button class="bg-indigo-500 font-semibold hover:bg-indigo-600  py-3 text-sm text-white uppercase w-full" onClick={() => navigate(`/checkOut`)}>Checkout</button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </body>

//     </div>
//   )

//   // Rest of your component code
// };


export default AddToCart;
// Product title :{product.title}
// Product price :{product.price}
// Product img :{product.img}
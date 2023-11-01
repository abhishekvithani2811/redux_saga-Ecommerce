import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/ApiInstance'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { FetchDetailAction } from '../redux/actions/produtsAction'
const OrderDetail = () => {
    const Razorpay = useRazorpay();
    // console.log(useSelector((state) => state))
    const handlePayment = async (value) => {
        const orderData = {
            amount: value * 100,
            currency: "INR",
            paymentMethod: "ONLINE",
        };
        try {
            const order = await axiosInstance.post("/order", orderData); //  Create order on your backend
            const options = {
                key: "rzp_test_Ls1Ugr8RHpdrw2", // Enter the Key ID generated from the Dashboard
                amount: value * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order.data.paymentId, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: function (response) {
                    //   alert(response.razorpay_payment_id);
                    //   alert(response.razorpay_order_id);
                    //   alert(response.razorpay_signature);
                },
                prefill: {
                    name: "abhishek",
                    email: "abhishek@example.com",
                    contact: "123445678",
                },
                notes: {
                    address: "surat",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new Razorpay(options);

            rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                // alert(response.error.code);
                alert(response.error.description);
                // alert(response.error.source);
                // alert(response.error.step);
                // alert(response.error.reason);
                // alert(response.error.metadata.order_id);
                // alert(response.error.metadata.payment_id);
            });

            rzp1.open();
        } catch (error) {
            console.error(error);
        }
    };
    // 
    const FetchOrderDetail1 = async () => {
        try {
            dispatch(FetchDetailAction())
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        FetchOrderDetail1();
    }, [])
    const detail = useSelector((state) => state.allProducts.fetch_order_detail[0])
    console.log(detail)
    const product = useSelector((state) => state.allProducts.productData)
    console.log(product)
    const dispatch = useDispatch();
    // console.log(useSelector((state) => state.cartReducer.order_detail_reducer))

    // const Fetchdetail = async () => {
    //     await axiosInstance
    //         .get(`/myProfile`)
    //         .then(response => console.log(response.data))
    //         .catch((error) => {
    //             console.log("err", error);
    //         })
    // }
    // useEffect(() => {
    //     Fetchdetail();
    // }, [])


    const calculateTotalCart = (items) => {
        if (!Array.isArray(items)) {
            return 0;
        }
        let total = 0;
        items.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total;
    };
    return (
        <div >
            <div className='flex flex-col justify-center items-center  bg-emerald-300  p-2 text-3xl'>ORDER DETAIL</div>
            <div className='flex flex-row h-max justify-center mt-10'>

                <div class="rightside ">
                    <p class="text-2xl flex justify-center font-serif	">ADDRESS</p>
                    <p class="inputbox bg-emerald-200 "> {detail.address}</p>
                    <p className='text-2xl  flex justify-center font-serif'>CITY</p>
                    <p class="inputbox bg-emerald-200 text-lg">  {detail.city}</p>
                    <p className='text-2xl  flex justify-center font-serif'>PHONE NUMBER</p>
                    <p class="inputbox bg-emerald-200 text-lg">  {detail.phonenum}</p>
                    <p className='text-2xl  flex justify-center font-serif'>COUNTRY</p>
                    <p class="inputbox bg-emerald-200 text-lg">  {detail.country}</p>
                    <p className='text-2xl  flex justify-center font-serif'>ZIP CODE</p>
                    <p class="inputbox bg-emerald-200 text-lg">  {detail.zipCode}</p>
                    <p className='text-2xl  flex justify-center font-serif'>PAY NOW </p>
                    <div className='flex flex-col p-2 px-20 justify-center items-center  bg-emerald-300  text-3xl hover:bg-red-500'>
                        <button onClick={() => { handlePayment() }}>
                            TOTAL : ₹ {calculateTotalCart(product)}
                        </button></div>
                </div>
                <div>
                    {/* <section class="text-gray-600 body-font "> */}
                    {/* <div class="container mx-10 "> */}
                    {/* <div class="flex flex-col text-center w-full mb-20">
                                <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                                <p class="lg:w-2/3 leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                            </div>   */}
                    {/* {product && product.length && product?.map(item => {
                                return (
                                    <div class="flex flex-wrap flex-row   w-10/12">
                                        <div class="p-4 w-10/12">
                                            <div class="h-full flex flex-row  items-center sm:justify-start justify-center text-center sm:text-left">
                                                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-fit object-cover object-center sm:mb-0 mb-4" src={item.productimage} />
                                                <div class="flex-grow sm:pl-8">
                                                    <h2 class="title-font font-medium text-lg text-gray-900">{item.name}</h2>
                                                    <h3 class="text-gray-500 mb-3">{item.name} : ${item.price}</h3>
                                                    <p class="mb-4">Quantity:{item.quantity}</p>
                                                    <p class="mb-4">Total Price: ${item.quantity * item.price}</p>
                                                    <span class="inline-flex">
                                                        <a class="text-gray-500">
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a class="ml-2 text-gray-500">
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                            </svg>
                                                        </a>
                                                        <a class="ml-2 text-gray-500">
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>)
                            })} */}

                    {/* </div> */}
                    {/* </section> */}
                    {/* <div className='flex flex-col justify-center items-center mt-10 my-10 bg-emerald-300  text-3xl'>
                        <button onClick={() => { handlePayment() }}>
                            TOTAL : ₹ {calculateTotalCart(product)}
                        </button></div> */}
                </div>
            </div>
        </div>

    )
}
export default OrderDetail
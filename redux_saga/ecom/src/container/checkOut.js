import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../utils/ApiInstance';
import { toast } from 'react-toastify';
import { orderDetailAction } from '../redux/actions/produtsAction';
import { useSelector } from 'react-redux';

const CheckOut = () => {
    const [credentials, setCredentials] = useState({
        phonenum: "",
        city: "",
        address: "",
        country: "",
        zipCode: "",
    });
    const navigate = useNavigate()
    const data1 = useSelector((state) => state)
    const handleInputChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
        console.log(credentials)
    };
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    // fetch products
    // const product = useSelector((state) => state.cartReducer.cartData)
    // console.log(product)
    const OrderDetail = async () => {
        dispatch(orderDetailAction(credentials))
        // if (data1 == 200){
        // console.log(credentials)
        // await axiosInstance
        //     .patch(`/details`, credentials)
        //     .then(response => dispatch(orderDetailAction(credentials)))
        //     // .then(response=>console.log((credentials)))
        //     .catch((error) => {
        //         console.log("err", error);
        //     })
        if (credentials) {
            toast.success('DATA SUBMIT !', {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // }
        }
        // console.log(response.data);
        // dispatch(orderDetailAction(response.data))
    }


    return (
        <div className=' flex flex-col justify-center items-center checkout h-screen'>

            <div class="mainscreen">
                {/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="bgimg " alt=""/> */}
                <div class="card">
                    <div class="leftside">
                        <img
                            src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            class="product"
                            alt="Shoes"
                        />
                    </div>
                    <div class="rightside">
                        <form action="">
                            <h1 className=' text-2xl  underline mb-4 underline-offset-4'>CheckOut</h1>
                            <p>ADDRESS</p>
                            <input type="text" class="inputbox" name='address' id='address' onChange={handleInputChange} required />
                            <p>CITY</p>
                            <input type="text" class="inputbox" name='city' id='city' onChange={handleInputChange} required />
                            <p>PHONE NUMBER</p>
                            <input type="number" class="inputbox" name='phonenum' id='phonenum' onChange={handleInputChange} required />

                            {/* <div class="expcvv"> */}

                            <p class="expcvv_text2">COUNTRY</p>
                            <input type="text" class="inputbox" name='country' id="country" onChange={handleInputChange} required />

                            {/* </div> */}
                            <p class="expcvv_text2">ZIP CODE</p>
                            <input type="number" class="inputbox" name='zipCode' id="zipCode" onChange={handleInputChange} required />
                            <p></p>
                            <div className=' flex mx-4 px-2'>
                                <button type='button'
                                    class="button" onClick={() => navigate(`/orderDetail`)}>CHECK OUT</button>
                                <button type='button'
                                    class="button ml-10" onClick={OrderDetail}>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CheckOut

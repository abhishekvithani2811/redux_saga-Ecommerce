import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';
import { fetchCartApi } from '../redux/sagas/fetchCartSaga';
import { useQuery } from 'react-query';
import { cartData2 } from '../redux/actions/produtsAction';


const Header = () => {
    const selector = useSelector((state) => state.authReducer?.user?.login?.token)
    // console.log(selector)
    var s1 = 0;
    const dispatch = useDispatch()

    s1 = useSelector((state) => state.allProducts.productData.length)
    // console.log(s1)
    const s2 = s1

    const FetchProduct = async () => {
        dispatch(cartData2())
    }
    const { data: data, refetch } = useQuery("items", fetchCartApi)
    useEffect(() => {
        FetchProduct()
        refetch()
    }, [])
    const navigate = useNavigate()
    const LOGOUT = () => {
        // if (selector) {
        localStorage.clear()
        dispatch(logout())
        navigate('/')
        // }
    }
    return (
        <div>
            {/* animate-bounce  */}
            <div class="text-gray-600 body-font shadow ">
                <div class="container mx-auto flex flex-wrap pt-1 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 m-3">
                        <div fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10  text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24"><AddShoppingCartIcon />
                        </div>
                    </a>


                    <span class="ml-3 text-xl ">FASHION BOX
                    </span>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer  ">
                        <Link to="/" class="mr-5 hover:text-gray-900" >Home</Link>
                        <Link to="/" class="mr-5 hover:text-gray-900">Products</Link>
                        <Link to="/contact" class="mr-5 hover:text-gray-900">Contact us</Link>
                        <Link to='/aboutus' class="mr-5 hover:text-gray-900">Aboout us</Link>
                    </nav>
                    {/* cart */}
                    <Link to={'/cartItem'} className='hover:text-slate-800 hover:text-xl'>
                        <LocalMallIcon />
                    </Link>
                    <span className=' text-xl text-red-400'>{s2}</span>
                    <div className="bg-red-500 rounded-full px-2  text-white text-sm">
                    </div>
                    {
                        (!selector ? (<button onClick={() => navigate(`/login`)} class="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 border-zinc-50 rounded">Login</button>) : (<button onClick={() => LOGOUT()} class="flex ml-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded">Logout</button>))
                    }




                </div>
            </div>
        </div >
    )
}

export default Header

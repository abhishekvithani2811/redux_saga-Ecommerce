import axios from 'axios';
import React, { useState } from 'react';
import { loginFailure, loginSuccess, setToken } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { axiosInstance } from '../utils/ApiInstance';
// import { connect } from 'react-redux';
// import { Formik } from "formik";
// import * as Yup from "yup";
// const schema = Yup.object().shape({
//   username: Yup.string()
//     .required("username is a required field"),
//     // .min(, "Mininum 7 characters")
//     // .max(15, "Maximum 15 characters"),
//   password: Yup.string()  
//     .required("Password is a required field")
//     // .min(8, "Password must be at least 8 characters"),
// });

// export const loginUser = (credentials) => {
//   console.log(credentials)

//   return (credentials) => {
//       console.log(credentials)
//       // dispatch(loginRequest());


//   };
// };

const Login = () => {


  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    password: '',
    email: '',
  });
  const navigate = useNavigate()
  const handleInputChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(credentials)
    try {
      const response = await axiosInstance.post('/login', credentials, {
        'Content-Type': 'application/json',
        Accept: "application/json"
      })

      if (response.status === 200) {
        // const token =response.data.login.token;
        // localStorage.setItem("token" ,token)
        // console.log(response.data.login.token);

        // window.localStorage.setItem("token", response.data.login.token)
        // console.log(loginSuccess(response.data))
        dispatch(loginSuccess(response.data));
        console.log(loginSuccess(response.data))
        navigate('/')
      }

    }

    catch (error) {
      dispatch(loginFailure(error.message));
      console.log(error)
      // if(error){
      //   toast.error('please check email or password!', {
      //     position: "bottom-center",
      //     autoClose: 2000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      //     });
      // }
    };
  }
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto  items-center flex justify-center">
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col">
            <form noValidate>
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5 text-center">LOGIN</h2>

              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">User Name</label>
                <input type="email" id="email"
                  name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
                <p className="error">
                </p>
              </div>
              <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
                <p className="error">
                </p>
              </div>
              <button type='submit' class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleFormSubmit} >LOGIN</button>
              {/* {err && <p>{err}</p>} */}
              <div className='mt-3'>
                <Link to="/signup">Ragister Now !</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )

}
export default Login

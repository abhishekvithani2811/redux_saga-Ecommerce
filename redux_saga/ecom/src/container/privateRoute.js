import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute() {
    const rout = "false";
    const nav = () => {
        if (rout != "false") {
            Navigate("/cartItem")
        }
    }
    useEffect(() => {
        nav();
    }, [])
    return (
        <div>

        </div>
    )
}

export default PrivateRoute

import React from 'react'
import { getCookie } from '../../../apiurl/Apiurl';
import { Navigate, Outlet } from 'react-router-dom';

export function AdminPrivate() {
    if (getCookie('admintoken') !== undefined && getCookie('admintoken') !== null) {
        return <Outlet />
    }
    else {
        return <Navigate to={"/admin-login"} />
    }
}

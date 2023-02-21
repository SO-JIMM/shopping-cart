import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import HomePage from "../pages/home-page/HomePage"
import CheckoutPage from "../pages/checkout-page/CheckoutPage"

const AppOutlet = () => {
  return (
    <div className='AppOutlet w-100 h-100'>
      <div className='h-25 w-100 bg-dark'>
        <h1>Hello</h1>
      </div>
      <div className='h-75 w-100'>
        <Outlet />
      </div>
    </div>
  )
}

export const Router = () => {
  return (
    <Routes>
      <Route element={<AppOutlet />} path='/'>
        <Route index element={<HomePage />} />
        <Route element={<CheckoutPage />} path='/checkout' />
      </Route>
    </Routes>
  )
}

import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/home-page/HomePage"
import CheckoutPage from "../pages/checkout-page/CheckoutPage"

export const Router = () => {
  return (
    <Routes>
      <Route element={<HomePage />} index />
      <Route element={<CheckoutPage />} path='/checkout' />
    </Routes>
  )
}

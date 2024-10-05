import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

interface productValue {
    id: string
    category: {
        id: string
        name: string
    }
    title: string
    descritpion: string
    price: number
}
 const initialState = {
    products: [],
    loading: false,
    error: null
 }
 export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
   return axios
   .get("https://api.escuelajs.co/api/v1/products")
   .then(response => response.data)
 })
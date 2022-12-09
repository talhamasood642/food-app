import React from 'react'
import './Shopping.css'
import { Product } from '../products/Product';
import { Context } from '../UseContext/Context';
import Cart from './Cart';
import { useReducer ,useEffect } from 'react';
import { reducer } from './Reducer';






const Shopping = () => {

  const intialState =
  {
    items: Product,
    totalAmount: 0,
    totalItem: 0
  }
  
  const [state, dispatch] = useReducer(reducer, intialState)

  const removeItems = (id)=>{
    return dispatch({
      type:"REMOVE-ITEM",
      payload: id
    })
  }

  const increament = (id) => {
     return dispatch ({
      type: "INCREAMENT",
      payload: id,
     })
    }

    const decreament = (id) => {
      return dispatch({
        type: "DECREAMENT",
        payload:id,
      })
      
    }

    const cartClear = (id) => {
      return dispatch({
        type : "CLEAR-CART",
        payload:id
      })
    }

    useEffect(() => {
      dispatch({type:"GET_TOTAL"})
    }, [state.items])
    
  return (
    <div className='shopping'>
      <Context.Provider value={{ ...state , removeItems , increament ,decreament , cartClear}}>
        <Cart />
      </Context.Provider>

    </div>



  )
}

export default Shopping

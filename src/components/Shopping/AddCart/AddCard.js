import React, { useState ,useContext } from 'react'
import './Card.css'
import img from '../../photos/fries.jpg'
import { Link } from 'react-router-dom'
import {Product} from '../../products/Product'
import AddCardItem from './AddCardItem'
import {Context} from '../../UseContext/Context';
import AddItems from './AddItems'
import  {useReducer}  from 'react'
import { reducer } from './AddCardReducer'



const AddCard = () => {

  const initialState = {
    items: Product
  }

  const cardDel = (id) => {
    return dispatch({
    type : "CARD-DELETE",
    payload : id
  })
   
  }




  const [state, dispatch] = useReducer(reducer , initialState);


  return (
    <>

    <section className='team-content'>
      <Context.Provider value= {{...state , cardDel}}>
        <AddItems />
      </Context.Provider>
      </section>
    </>
  )
}

export default AddCard;

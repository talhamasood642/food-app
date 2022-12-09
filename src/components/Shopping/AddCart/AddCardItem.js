import React from 'react'
import img from '../../photos/fries.jpg'
import { useContext } from 'react'
import { Context } from '../../UseContext/Context'

const AddCardItem = ({id , img , title , decription , price}) => {

  const {cardDel , addToCard} = useContext(Context)
  return (
    <>
      <div className='card'>
            <img src={img} alt="fries" />
            <h3>{title} </h3>
            <p>{decription}</p>
            <h4>{price}</h4>
            <div className='card-btn' >
              <button className='add-btn' onClick={()=>{addToCard(id)}} >Add To Card</button>
              <button className='del-btn' onClick={()=>{cardDel(id)}}>Delete Card</button>
            </div>
          </div>
    </>
  )
}

export default AddCardItem

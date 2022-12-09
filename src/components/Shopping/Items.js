import React, { useContext } from 'react'
import removeItems from '../Shopping/Shopping'
import { Context } from '../UseContext/Context'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../React-State/index'

const Items = ({ id , decription, title, img, price ,quantity }) => {

    // const dispatch = useDispatch()
    const {removeItems , decreament, increament } = useContext(Context);
    // const {addCard} = bindActionCreators(actionCreators, dispatch )

   


    return (
        <>
            <div className='final-sec'>
                <div className='cart-img'><img src={img} alt='cart-img' /></div>
                <div className='product-name'>
                    <h4>{title}</h4>
                    <p>{decription}</p>
                </div>
                <div className='inc-dec'>
                    <button onClick={()=>{decreament(id)}}>-</button>
                    <input type="text" placeholder={quantity}/>
                    <button onClick={()=>{increament(id)}}>+</button>
                </div>
                <div className='price'>
                    <h4>{price} Rupees</h4>
                </div>

                <div className='delete-btn'>
                    <button onClick={()=>{removeItems(id)}}><i class="fa-solid fa-trash" ></i></button></div>
            </div>
            <div className='line'>
                <hr />
            </div>
               

        </>
 
 )
}

export default Items

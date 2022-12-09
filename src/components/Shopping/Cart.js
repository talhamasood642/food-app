import React from 'react'
import Items from './Items';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../UseContext/Context';
// import { useSelector } from 'react-redux';




const Cart = ({id}) => {

const {items , cartClear , totalAmount , totalItem} = useContext(Context);

// const amount = useSelector(state=>state.amount)

// if(items.length === 0){
//     return(
//         <>
//             <div className='first-sec'>
//                 <div className='back-arrow'>
//                     <Link to="/"><i class="fa-solid fa-arrow-left-long back-arrow"></i></Link>
//                 </div>
//                 <h4>Continue Shopping</h4>
//                 <i class="fa-solid fa-inbox  inbox"></i>
//             </div>
//             <hr />

//             <div className='second-sec'>
//                 <div className='left'>
//                 <h4>Shopping Cart</h4>
//                 <p>You Have 0 Items in Cart</p>
//                 </div>
//                 <div className='clear-btn'>
//                 <button onClick={()=>{cartClear(id)}}>Clear Cart</button>zz
//                 </div>
//             </div>
//         </>
//     )
// }

    
    return (
        <div>
              <div className='first-sec'>
                <div className='back-arrow'>
                    <Link to="/"><i class="fa-solid fa-arrow-left-long back-arrow"></i></Link>
                </div>
                <h4>Continue Shopping</h4>
                <i class="fa-solid fa-inbox  inbox"></i>
            </div>
            <hr />

            <div className='second-sec'>
                <div className='left'>
                <h4>Shopping Cart</h4>
                <p>You Have {totalItem} Items in Cart</p>
                </div>
                <div className='clear-btn'>
                <button className='amount'>Total Amount: {totalAmount}</button>
                <button onClick={()=>{cartClear(id)}}>Clear Cart</button>
                </div>
            </div>


            <div className='third-sec'>

                {
                    items.map((curItem) => {

                        return <Items key={curItem.id} {...curItem} />

                    })
                }
            </div>
           
        </div>
    )
}

export default Cart




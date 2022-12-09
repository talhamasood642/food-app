import React from 'react'
import { Link } from 'react-router-dom'
import './addCard.css'
import logo from '../../photos/logo8.png'
import img from '../../photos/fries.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCard from './AddCard'


const Card = () => {
  return (
    <>
      <nav className='card-nav'>
        <div className='nav-right'>
          <img src={logo} alt='' />
        </div>
        <div className='card-head'>
       <Link to ="/"> <i class="fa-solid fa-arrow-left-long card-back-arrow" /></Link>
        <h4>CONTINUE SHOPPING</h4>
        </div>
        <div className='card-icon'>
        <Link to="/Shopping" ><i class="fa-solid fa-inbox" /></Link>
        <Link to="/FormCard"> <i class="fa-solid fa-plus ms-5 width-2"></i></Link>
        </div>
      </nav>
 
    <AddCard />

      </>



    
  )
}

export default Card;

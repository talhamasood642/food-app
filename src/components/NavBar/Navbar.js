import React from 'react'
import logo from "../photos/logo8.png"
import img from "../photos/home-img.jpg"
import './Navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='main-container'>
      <nav className='nav-control'>
        <div className='logo'><img src={logo} alt='logo' height={120} /></div>
        <ul className='nav-list'>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/card">SHOPPING</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <div className='icon'>
          <Link to="/shopping"><i class="fa-solid fa-cart-shopping cart"></i></Link>
          <i class="fa-solid fa-plus plus"></i>
        </div>

        <div className='search-bar'>
          <input type="search" placeholder="search"></input>
          <i class="fa-solid fa-magnifying-glass search"></i>
          <button type='submit'>Search</button>
        </div>

      </nav>


      <div className='section-2'>

        <div className='text'>
          <h2>Welcome Food App</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nihil, maxime facere veritatis placeat corrupti harum illum velit, ex suscipit quis sed numquam vero. Libero cupiditate neque animi aperiam omnis!</p>

          <div className='btn'>
            <button className='order'>Order Now</button>
            <button className='check'>Check Order</button>
          </div>
        </div>

        <div className='home-img'>
          <img src={img} alt='home-img' height={500} />
        </div>
      </div>


    </div>



  )
}



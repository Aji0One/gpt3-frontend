import './navbar.css';
import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/GPT-3.svg";
import axios from 'axios';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handlePayment= async () => {
    // console.log("Calling the stripe..")
    await axios.post("https://paymentgateway-evok.onrender.com/create-checkout-session",
      {"items":[{"id":1,"quantity":1}]}
    ,{
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res => {
       window.location = res.data.url
    }).catch(e => {
      console.log(e.error)
    })
  }

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          < Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        {/* <p>Sign in</p> */}
        <button type='button' onClick= {handlePayment}>Payment</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ?
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              < Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
     
                <button type='button' onClick= {handlePayment}>Payment</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
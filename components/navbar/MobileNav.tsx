import React, { useState } from 'react'
import NavLinks from './navLinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
const MobileNav = () => {
  const [show, setShow] = useState(false)
  const hamburgerIcon = <GiHamburgerMenu size='1.8rem' className='hamburguer'/>
  const closeIcon = <IoMdClose size='1.8rem' className='hamburguer'/>
  return (
    <div className='mobileNav' onClick={ () => setShow(!show)}>
        { show ? closeIcon : hamburgerIcon }
        { show && <NavLinks/> }
    </div>
  )
}

export default MobileNav
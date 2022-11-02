import React from 'react'
import CartWidget from './CartWidget'
import Li from './NavBar'
import "./NavBar.css"


function NavBar() {
  return (
<div className="fondo">
  <CartWidget/>
  <h1> TITULO NOSE AUN </h1>
  <ul>
 <Li title="enlace 1" />
 <Li title="enlace 2" />
 <Li title="enlace 3" />
  </ul>


  </div>
  )
}

export default NavBar
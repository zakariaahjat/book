import React, { useState } from 'react';

import './Nac.css'
import logo from './Image/Loogo.png'
import menu from './Image/menu.png'
import home from './Image/home.png'
import book from './Image/book.png'
import categorie from './Image/category.png'
import about from './Image/info.png'
import services from './Image/service.png'
import contact from './Image/email.png'
import login from './Image/enter.png'

const Nav = () => {

    const [isVisible, setIsVisible] = useState(false);

    const Nav = () => {
        setIsVisible(!isVisible);
    };
  return (
    <div>
      <div class="rowv">
  <div class="column2x" >
  <img  class="pic1" src={logo} alt="" />

   
  </div>
 

  <div class="column2x" >
  <button class="bbbb" onClick={Nav}><img class="pic2" src={menu} alt="" /></button>
  </div>

</div>
<center><div className={`menu ${isVisible ? 'visible' : 'hidden'}`}>
        <ul className='nav-list1' >
        <li><a href="#home"><img  class="icon" src={home}  alt="home" />Home</a></li>
        <li><a href="#Books"><img class="icon"  src={book}  alt="Books" />Books</a></li>
        <li><a href="#Categories"><img class="icon"   src={categorie}  alt="Categories" />Categories</a></li>
        <li><a href="#About"><img class="icon"  src={about}  alt="About" />About</a></li>
        <li><a href="#Services"><img class="icon"   src={services}  alt="Services" />Services</a></li>
        <li><a href="#Contact"><img class="icon"   src={contact}  alt="Contact" />Contact</a></li>
        <li><a href="#Login"><img  class="icon"  src={login}  alt="Login" />LogIn</a></li>
         
            
        </ul>
    </div></center>
    </div>
  )
}

export default Nav

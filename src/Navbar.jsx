import React from 'react'
import './Navbar.css'
import logo from './Image/Loogo.png'
import home from './Image/home.png'
import book from './Image/book.png'
import categorie from './Image/category.png'
import about from './Image/info.png'
import services from './Image/service.png'
import contact from './Image/email.png'
import login from './Image/enter.png'
import menu from './Image/menu.png'
const Navbar = () => {
  return (
   
    <div class="row">
  <div class="column00" >
 <center> <img class="img1" src={logo}  alt="logo" /></center> 
 <div class="menu-button" id="menuButton">
    <img src={menu} alt="Menu" class="menu-icon"/>
  </div>
  </div>
  <div class="column11" >
  <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#home"><img  src={home}  alt="home" /><span class="nav-text"  >Home</span></a></li>
        <li><a href="#Books"><img  src={book}  alt="book" /><span class="nav-text" >Books</span></a></li>
        <li><a href="#Categoris"><img  src={categorie} alt="categorie" /><span class="nav-text" >Categoris</span></a></li>
        <li><a href="#about"><img  src={about}  alt="about" /><span class="nav-text" >About</span></a></li>
        <li><a href="#services"><img  src={services}  alt="services" /><span class="nav-text" >Services</span></a></li>
        <li><a href="#contact"><img  src={contact}  alt="contact" /><span class="nav-text" >Contact</span></a></li>
      </ul>
    </nav>
  </div>
  <div class="column22" >
<center><button class="B1"><img class="button-icon"  src={login}  alt="login" />Login</button></center>

  </div>
</div>

  )
}

export default Navbar

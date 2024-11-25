import React from 'react'
import read from './Image/read.png'
import './Jhead.css'
import  buy from './Image/cart.png'

const Jhead = () => {
  return (
    <div>
<div class="rowh">
  <div class="column1" >
  <h1 class="tittle">Find the best</h1>
  <h1 class="tittle">book for</h1>
  <h1 class="tittle">you</h1>
  <br/>
  <p class="paragraphe">"Welcome to [Your Website Name], where elegance meets excellence.<br/>
     We specialize in creating unforgettable experiences that embody <br/>
     the essence of royalty. From opulent venues to personalized services,<br/>
      every detail is crafted to transport you into a world of grandeur and sophistication.<br/>
       Whether you're hosting an intimate gathering or a grand celebration, <br/>
       our team is dedicated to making your event as majestic as it is memorable.<br/>
        Step into a realm where luxury knows no bounds, <br/>
        and let us turn your vision into a regal reality."
        <br/>
        <br/><br/>
        <button class="button01"> <img src={buy} alt=""/>Buy now</button>
        </p>

       
  </div>
 

  <div class="column1" >
<img class="img" src={read} alt=""  />
  </div>

</div>
    </div>
  )
}

export default Jhead

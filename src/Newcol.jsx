import React from 'react'
import './Newcol.css'
import hobbit from './Image/hobbit.jpg'
import harry from './Image/Harry.jpg'
import word from  './Image/Word.jpg'
const Newcol = () => {
  return (
    <div>
    <center>
    <div class="row000">
        <br/>
        <br/>
    <h1 className='titl'>New Colloction</h1>
    <br/>
    <br/>
    <center>   <div class="column0" >
    <div class="card">
  <img src={hobbit} alt="Product Image0" class="card-image" />
  <div class="card-name">
  The Hobbit And The Lord Of The Rings: Deluxe Pocket Boxed Set
  </div>
</div>

    </div></center>
    <center> <div class="column0" >
    <div class="card">
  <img src={harry} alt="Product Image1" class="card-image" />
  <div class="card-name">
  Harry Potter Paperback Box Set (Books 1-7)
  </div>
</div>

    </div></center>
    <center> <div class="column0" >
    <div class="card">
  <img src={word} alt="Product Image3" class="card-image" />
  <div class="card-name">
  Word Cloud Classics: Horror Collection
  </div>
</div>

  
    </div></center>
  </div>
  </center>
  </div>
  )
}

export default Newcol


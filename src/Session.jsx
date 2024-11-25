import React from 'react'
import best from './Image/best book.png'
import './Session.css'

const Session = () => {
  return (
    <div>
       
    <div class="rows">
    <div class="column1s" >
    <img class="imgs" src={best} alt=""  />
      </div>
      <div class="column1s" >
      <h1 class="tittles">Best book<br/>
      In 2024</h1>

      <br/>
      <p class="paragraphes">""James" by Percival Everett – <br/>
        This reimagining of The Adventures of Huckleberry Finn,<br/> 
        told from the perspective of the enslaved character Jim, <br/>
        has garnered widespread acclaim and is praised for its dark humor and depth.<br/>
         It's already considered one of the top books of the year by multiple sources, <br/>
         including Amazon and The New York Time​ <br/>

            <br/>
            <br/><br/>
          
            </p>
            <div class="container">
    <div>
        <h3>2024</h3>
        <p>Year of book</p>
    </div>
    <div class="vertical-line"></div>
    <div>
        <h3>+8900</h3>
        <p>book realesd</p>
    </div>
    <div class="vertical-line"></div>
    <div>
        <h3>+3200</h3>
        <p>Book sell</p>
    </div>
</div>
      </div>

    </div>
        </div>
  )
}

export default Session

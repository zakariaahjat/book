
import React, { useState, useEffect } from 'react';
import './BookRelease.css'

const BookRelease = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set the release date (adjust this to your desired release date)
  const releaseDate = new Date('October 20, 2024 00:00:00').getTime();

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = releaseDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // If the countdown is finished, clear the interval
      if (timeLeft < 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
}, [releaseDate]);

  return (
<div class="rowdate">
<center> <div class="columndate" >
  <div className='txtdate'>
      <h2>should you throw</h2><br/>
    <p>It’s celebration time! You’ve put in the time, energy, and effort. You’ve written, rewritten, edited, proofed, and formatted your story, and now it’s published and out there for the world to read. One way many authors celebrate is by throwing a book release party. </p>
    <br/>
    <div class="containerbook">
        
    <div className='divbook'>
        <h3>{timeLeft.days}</h3>
        <p>Day</p>
    </div>
    
    <div className='divbook'>
        <h3>{timeLeft.hours}</h3>
        <p>Hour</p>
    </div>
    
    <div className='divbook'>
        <h3>{timeLeft.minutes}</h3>
        <p>Min</p>
    </div>
    <div className='divbook'>
        <h3>{timeLeft.seconds}</h3>
        <p>s</p>
    </div>
    <br/>

    <br/>
</div>
<br/>
<button className='bookb'>Contact the author</button>
<br/>
    </div>
  </div></center>
 <center> <div class="columndate" >
 <img src="https://images.squarespace-cdn.com/content/v1/5a08c31a64b05f2730b4121b/1562454421958-DRE4CWZIHU5BHBW9F3CZ/should+you+throw+a+book+release+party.jpg" className='imgbook' alt="book" />
  </div></center>
  <br/>
  <br/>
  <br/>
</div>
  )
}

export default BookRelease

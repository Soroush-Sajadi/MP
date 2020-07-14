import React from 'react';
import background from '../../Background-Pictures/Background2.jpg'
import '../Style/Home.css';

function Home() {
  return (
     <div className="home-wrapper">
         <img src={background} alt="background" />
     </div>
  );
}

export default Home;
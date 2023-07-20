import React from 'react';
import BodyMobile from '../app/body/BodyMobile';
import './Home.scss';
import BodyDesktop from '../app/body/BodyDesktop.jsx';


function Body() {
  return (
    <>
      <div className='body'>
        <BodyDesktop/>
      </div>
      <div className='body-mobile'>
        <BodyMobile/>
      </div>
      
    </>
    
  )
}

export default Body;
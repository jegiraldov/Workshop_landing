import React from 'react';
import Body from '../app/components/body/Body.jsx';
import BodyMobile from '../app/components/body/BodyMobile.jsx';
import './Home.scss';


function Home() {
  return (
    <>
      <div className='body'>
        <Body/>
      </div>
      <div className='body-mobile'>
        <BodyMobile/>
      </div>
      
    </>
    
  )
}

export default Home;
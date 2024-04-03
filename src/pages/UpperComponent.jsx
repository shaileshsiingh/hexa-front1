import React from 'react';
import './UpperComponent.css';
import img from '../assets/01.png';
import mask from '../assets/02.png';
import img2 from '../assets/03.png';
import mask1 from '../assets/02.png';
import sportgoods from '../assets/04.png';
import Frame from '../assets/04.png';

const UpperComponent = ({ theme = 'dark-theme' }) => { 
  return (
    <>
    <h1 className='title' style={{ position: 'absolute', top: 0, left: 0, fontFamily: 'sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#333',marginLeft: '60px' }}>Sports</h1>

    <div className={`upcontent ${theme}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' ,margin: '50px'}}>
      <div className='players'>
        <div className='img'>
          <img src={img} alt="Image" />
          <span> Sacramento River Cats</span>
          <div className='sportEvent'>
            <div className='events'>
              <ul>Top Events<li>40 Events</li></ul>
              <ul>Sport<li>Baseball</li></ul>
            </div>
          </div>
        </div>
        <div className='img'><img src={mask} alt="Image" />
          <span>Las Vegas Aviators</span>
          <div className='sportEvent'>
            <div className='events'>
              <ul>Top Events<li>40 Events</li></ul>
              <ul>Sport<li>Baseball</li></ul>
            </div>
          </div>
        </div>
        <div className='img'><img src={img2} alt="Image" />
          <span>New Jersey Devils</span>
          <div className='sportEvent'>
            <div className='events'>
              <ul>Top Events<li>28 Events</li></ul>
              <ul>Sport<li>Hockey</li></ul>
            </div>
          </div>
        </div>
        <div className='img'><img src={mask1} alt="Image" />
          <span>Las Vegas Aviators</span>
          <div className='sportEvent'>
            <div className='events'>
              <ul>Top Events<li>28 Events</li></ul>
              <ul>Sport<li>Baseball</li></ul>
            </div>
          </div>
        </div>
        <div className='img' style={{ position: 'relative', display: 'inline-block' }}>
          <img src={sportgoods} alt="Sport Goods" />
          <img src={Frame} alt="Frame" style={{ position: 'absolute', top: 0, right: 0 }} />
          <div className='advert'>Advertisement title
            <text className='advertPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>    
          </div>
        </div>
      </div>
      <div className="button-container flex items-center justify-center p-50">
        <button>See More</button>
      </div>
    </div>
    </>
  );
}

export default UpperComponent;

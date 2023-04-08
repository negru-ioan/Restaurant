import React from 'react';
import { SubHeading } from '../../components';
import './Header.css';
import images from '../../constants/images';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
      <div className='app__wrapper_info'>
        <SubHeading title="Descoperă noua aromă"/>
      <h1 className='app__header-h1'>Cheia unei mese delicioase</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, corporis praesentium. Ad nobis deserunt iure rem asperiores et, provident sed.
      </p>
      <button type='button' className='custom__button'>Exporează Meniul</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} />
    </div>
  </div>
);

export default Header;

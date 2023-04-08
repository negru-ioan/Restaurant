import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacte" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem', textTransform: 'none'}}>Găsește-ne</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Vlaicu Pârcalab St 45, Chișinău</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Program de lucru</p>
        <p className="p__opensans">Luni - Vineri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sâmbătă - Duminică: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Vizitează-ne</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
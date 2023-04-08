import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Jurnal" />
      <h1 className="headtext__cormorant">Abonează-<span style={{textTransform: 'none'}}>te</span> la jurnalul nostru</h1>
      <p className="p__opensans">Și nu ratata ultimele actualizări!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Abonează-<span style={{textTransform: 'none'}}>te</span> </button>
    </div>
  </div>
);

export default Newsletter;
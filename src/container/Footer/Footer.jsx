import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactaţi-ne</h1>
        <p className="p__opensans">Vlaicu Pârcalab St 45, Chișinău</p>
        <p className="p__opensans">0685 10 702</p>
        <p className="p__opensans">0608 58 696</p>
      </div>

      <div className="app__footer-links_logo">
        <p className='brand__name' style={{marginBottom: '2rem'}}>Gioconda</p>
        <p className="p__opensans">&quot;Cel mai bun mod de a te regăsi este să te pierzi în slujba celorlalți.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Program De Lucru</h1>
        <p className="p__opensans">Luni-Vineri:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sâmbătă-Duminică:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gioconda. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
import React, { useState } from "react";
import "./Footer.css"
import { BsGlobe } from "react-icons/bs"
import logo from './footer-img.PNG'
import logo2 from './footer-img2.PNG'
import logo3 from './footer-img3.PNG'

const Footer = () => {
  const [displayPopUp2, setDisplayPopUp2] = useState(false)

  let electricity
  electricity = (
    <p id="popup2" className="popup">Qwerty’s 100% renewable electricity commitment includes the electricity used by the data centers that host Qwerty.com, as well as the electricity that powers Qwerty’s global offices and employees working remotely from home in the US.</p>
  )

  return (
    <footer>
      <img src={logo3} id="row-img" alt="footer-bg" />
      <img src={logo2} id="row-img" alt="footer-bg" />
      <img src={logo} id="row-img" alt="footer-bg" />
      <div id="row2">
        {displayPopUp2 ? electricity : null}
        <BsGlobe size={23} />
        <p className="underline-text"
          onMouseEnter={() => setDisplayPopUp2(true)}
          onMouseLeave={() => setDisplayPopUp2(false)}
        >
          Qwerty is powered by 100% renewable electricity.
        </p>
      </div>
      <div id="row3">
        <div id="row3-inner">
          <div>
            <div className="row3-headers">Technologies</div>
            <p>React</p>
            <p>Redux</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>SQLAlchemy</p>
            <p>AWS S3</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div>
            <p className="row3-headers">Linkedin</p>
            <a className='footer-link' href='https://www.linkedin.com/in/steve-correa/' target="_blank" rel="noreferrer">Steve Correa</a>
            <a className='footer-link' href='https://www.linkedin.com/in/minu-kim-911bbb192/' target="_blank" rel="noreferrer">Minu Kim</a>
            <a className='footer-link' href='https://www.linkedin.com/in/grant-ellis-russell' target="_blank" rel="noreferrer">Grant Russell</a>
            <a className='footer-link' href='https://www.linkedin.com/in/eddie-verdusco/' target="_blank" rel="noreferrer">Eddie Verdusco</a>
          </div>
          <div>
            <p className="row3-headers">GitHub</p>
            <a className='footer-link' href='https://github.com/scorrea310' target="_blank" rel="noreferrer">Steve Correa</a>
            <a className='footer-link' href='https://github.com/minuminukim' target="_blank" rel="noreferrer">Minu Kim</a>
            <a className='footer-link' href='https://github.com/grantongrant' target="_blank" rel="noreferrer">Grant Russell</a>
            <a className='footer-link' href='https://github.com/verduscos' target="_blank" rel="noreferrer">Eddie Verdusco</a>

          </div>
        </div>
      </div>
      <div id="row4">
        <div id="row4-inner">
          <p>
            United States | English (US) | $ (USD)
          </p>
          <p>
            © 2022 Qwerty, Inc.
          </p>
        </div>
      </div>

    </footer>
  )
}


export default Footer;

import React from "react";
import "./Footer.css"
import { BsGlobe } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <div id='story-row'>
        <div id="story-row-inner">
          <h1 id="footer-title">What is Qwerty</h1>
        </div>
      </div>
      <div id="row2">
        <BsGlobe size={23} />
        <p>
          Etsy is powered by 100% renewable electricity.
        </p>
      </div>
      <div id="row3">
        <table id="row3-inner">
          <div>
            <th className="row3-headers">Technologies</th>

            <td>React</td>
            <td>Redux</td>
            <td>JavaScript</td>
            <td>Python</td>
            <td>SQLAlchemy</td>
            <td>AWS S3</td>
            <td>HTML</td>
            <td>CSS</td>
          </div>
          <div>
            <th className="row3-headers">Linkedin</th>
            <a className='footer-link'  href='https://www.linkedin.com/in/steve-correa/' target="_blank">Steve Correa</a>
            <a className='footer-link'  href='https://www.linkedin.com/in/minu-kim-911bbb192/' target="_blank">Minu Kim</a>
            <a className='footer-link'  href='https://www.linkedin.com/in/grant-ellis-russell' target="_blank">Grant Russell</a>
            <a className='footer-link'  href='https://www.linkedin.com/in/eddie-verdusco/' target="_blank">Eddie Verdusco</a>
          </div>
          <div>
            <th className="row3-headers">GitHub</th>
            <a className='footer-link'  href='https://github.com/scorrea310' target="_blank">Steve Correa</a>
            <a className='footer-link'  href='https://github.com/minuminukim' target="_blank">Minu Kim</a>
            <a className='footer-link'  href='https://github.com/grantongrant' target="_blank">Grant Russell</a>
            <a className='footer-link'  href='https://github.com/verduscos' target="_blank">Eddie Verdusco</a>

          </div>
        </table>
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

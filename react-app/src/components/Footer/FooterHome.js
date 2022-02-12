import React from "react";

const FooterHome = () => {
  return (
    <div id='story-row'>
      <div className="story-row-inner">
        <h1 id="footer-title">What is Qwerty</h1>
      </div>
      <div className="story-row-inner">
        <div>
          <p className="story-headers">A community doing good</p>
          <p className="footer-stories">Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. <span className="underline-text">Here are some of the ways we’re making a positive impact, together.</span></p>
        </div>
        <div>
          <p className="story-headers">Support independent creators</p>
          <p className="footer-stories">There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
        </div>
        <div>
          <p className="story-headers">Peace of mind</p>
          <p className="footer-stories">Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
        </div>
      </div>
    </div>
  )
}

export default FooterHome;

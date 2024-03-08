import React from 'react';
import Logo from '../assets/flogo.png';

const Footer = () => {
  return (
    <> 
      <div className="bg-dark text-light mt-1 py-3">
        <div className="container" >
          <div className="row pt-4">
            <div className="col-md-4 d-flex align-items-left mb-5">
              <div style={{backgroundColor:'white', height:'50px'}}>
                <img src={Logo} alt="Logo" />
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="/">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/vgdc">VGD Challenge</a></li>
                <li><a href="/contact">Contact Us</a></li> 
              </ul>
            </div>
            <div className="col-md-4 mb-5">
              <h4>OUR NEWSLETTER</h4>
              <p>Sign up today for tips and latest news and exclusive special offers.</p>
              <input type="email" placeholder='Enter your email' className="form-control mt-3 mb-3" />
              <button className="btn btn-danger">Subscribe</button>
            </div>
          </div>
         
      <div className="container">
        <div className="footer__social-media" style={{ marginBottom: '20px', marginTop: '10px'}}>
          <div className='d-flex'>
            <a href="https://twitter.com/GraphixVec72342"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/vechygraphix?igshid=ZGUzMzM3NWJiOQ=="><i className="fab fa-instagram"></i></a>
            <a href="https://m.facebook.com/profile.php/?id=100067635907695"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
        
        {/* Blank section */}
        <div className="blank-section">
          {/* Add content here */}
        </div>
      </div>
    </div>
        <div className="mt-5 text-center">
          <p> &copy; Copyright {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
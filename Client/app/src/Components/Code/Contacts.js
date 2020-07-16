import React from 'react';
import email from '../../images/Contacts-Logo/gmail.svg';
import fb from '../../images/Contacts-Logo/facebook.svg';
import instagram from '../../images/Contacts-Logo/instagram-sketched.svg'
import '../Style/Contacts.css';

function Contacts() {
  return (
    <div className="contacts-wrapper">
      <div className="contacts-email">
				<img src={email} alt="email" />
				{/* <a href="soroush.sajadi@appliedtechnology.se">soroush.sajadi@appliedtechnology.se</a> */}
			</div>
			<div className="contacts-fb">
				<img src={fb} alt="facebook" />
			</div>
			<div className="contacts-instagram">
				<img src={instagram} alt="instagram" />
			</div>
		</div>
  );
}

export default Contacts;
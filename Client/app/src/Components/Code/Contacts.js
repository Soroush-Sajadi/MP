import React from 'react';
import email from '../../images/Contacts-Logo/gmail.svg';
import fb from '../../images/Contacts-Logo/facebook.svg';
import instagram from '../../images/Contacts-Logo/instagram-sketched.svg'
import '../Style/Contacts.css';

function Contacts() {
  return (
    <div className="contacts-wrapper">
      <div className="contacts-email">
				<a href="soroush.sajadi@appliedtechnology.se">
					<img src={email} alt="email" />
					<p>soroush.sajadi@appliedtechnology.se</p>
				</a>
			</div>
			<div className="contacts-fb">
				<a href="https://www.facebook.com/su.mu.5439/">
					<img src={fb} alt="facebook" />
					<p>soroush.sajadi@appliedtechnology.se</p>
				</a>
			</div>
			<div className="contacts-instagram">
				<a href="https://www.facebook.com/su.mu.5439/">
					<img src={instagram} alt="instagram" />
					<p>soroush.sajadi@appliedtechnology.se</p>
				</a>
			</div>
			<div className="contacts-tel">
				<a href="https://www.facebook.com/su.mu.5439/">
					<img src={instagram} alt="instagram" />
					<p>soroush.sajadi@appliedtechnology.se</p>
				</a>
			</div>
		</div>
  );
}

export default Contacts;
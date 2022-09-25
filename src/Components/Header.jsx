import React from "react";
import logo from "./../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook, faYoutube, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
	return (
		<>
			<header className="container grid-4fr gap p-1 flex-align-center">
				<div className="grid-span-1 phone-grid-span-4 flex-center">
					<img src={logo} alt="logo" />
				</div>
				<div className="grid-span-2 phone-grid-span-4 flex-wrap flex-center gap">
					<div className="flex">
						<div className="fs-2 clr-primary p-y-05 p-x-1 flex-center">
							<FontAwesomeIcon icon={faUser} />
						</div>
						<div className="flex-grow-1">
							<h4 className="clr-primary fs-05 text-bold m-y-05">
								نسعد بالرد عليكم على
							</h4>
							<p className="clr-gray fs-05 m-0">info@example.com</p>
						</div>
					</div>
					<div className="flex">
						<div className="fs-2 clr-primary p-y-05 p-x-1 flex-center">
							<FontAwesomeIcon icon={faPhone} />
						</div>
						<div className="flex-grow-1">
							<h4 className="clr-primary fs-05 text-bold m-y-05">
								تواصل معنا على الهاتف
							</h4>
							<p className="clr-gray fs-05 m-0">+201143140360</p>
						</div>
					</div>
				</div>
				<div className="grid-span-1 phone-grid-span-4 flex-center">
					<div className="flex">
						<div className="fs-2 clr-primary p-y-05 p-x-1 flex-center">
							<FontAwesomeIcon icon={faWhatsapp} />
						</div>
						<div className="flex-grow-1">
							<h4 className="clr-primary fs-05 text-bold m-y-05">
								راسلنا عبر واتساب
							</h4>
							<p className="clr-gray fs-05 m-0">+201143140360</p>
						</div>
					</div>
				</div>
			</header>

         <nav className="nav sticky bg-primary clr-white">
            <div className="container">
               <a className="nav-icon">
                  <FontAwesomeIcon icon={faBars} />
               </a>
               <ul className="nav-list">
                  <li><a href="#" className="nav-link">
                     <FontAwesomeIcon icon={faHome} />
                  </a></li>
                  <li><a href="#" className="nav-link">من نحن</a></li>
                  <li><a href="#" className="nav-link">أعمالنا</a></li>
                  <li><a href="#" className="nav-link">خدماتنا</a></li>
                  <li><a href="#" className="nav-link">مميزاتنا</a></li>
                  <li><a href="#" className="nav-link">عملاؤنا</a></li>
                  <li><a href="#" className="nav-link">تواصل معنا</a></li>
               </ul>
               <ul className="flex gap-1 clr-white list-style-none">
                  <li className="hover-scale pointer transition-03"><FontAwesomeIcon icon={faYoutube} /></li>
                  <li className="hover-scale pointer transition-03"><FontAwesomeIcon icon={faTwitter} /></li>
                  <li className="hover-scale pointer transition-03"><FontAwesomeIcon icon={faFacebook} /></li>
                  <li className="hover-scale pointer transition-03"><FontAwesomeIcon icon={faInstagram} /></li>
                  <li className="hover-scale pointer transition-03"><FontAwesomeIcon icon={faLinkedin} /></li>
               </ul>
            </div>
         </nav>
		</>
	);
}

export default Header;

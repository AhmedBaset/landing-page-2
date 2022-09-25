import React from "react";
import cvImage from "./../Images/cv.png"

function Cv() {
	return (
		<section className="container m-b-3 clr-white flex-center flex-wrap gap p-y-2 p-x-1 linear-gradient-to-left-primary-secondary">
			<img className="w-7" src={cvImage} alt="cv" />
         <h3 className="fs-2 flex-grow-1">زودنا بسيرتك الذاتية</h3>
         <a href="#" className="btn-outline-light">تابع الآن</a>
		</section>
	);
}

export default Cv;

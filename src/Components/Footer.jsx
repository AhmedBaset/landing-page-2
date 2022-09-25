import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./../Images/logo.png";

function Footer() {
	return (
		<footer className="m-t-3">
			<div className="bg-gray-light p-y-1">
				<div className="container flex-wrap">
					<div className="clr-gray-dark">
						<h4 className="clr-tertiary fs-150 fw-600">تواصل معنا</h4>
						<div className="flex-center gap-25">
							<div className="w-2 h-2 flex-center clr-tertiary">
								<FontAwesomeIcon icon={faLocationDot} />
							</div>
							<p className="flex-grow-1">Riyadh, Saudi Arabia</p>
						</div>
						<div className="flex-center gap-25">
							<div className="w-2 h-2 flex-center clr-tertiary">
								<FontAwesomeIcon icon={faEnvelope} />
							</div>
							<p className="flex-grow-1">info@eie.sa</p>
						</div>
						<div className="flex-center gap-25">
							<div className="w-2 h-2 flex-center clr-tertiary">
								<FontAwesomeIcon icon={faPhone} />
							</div>
							<p className="flex-grow-1">966592792787+</p>
						</div>
					</div>
					<div className="flex-grow-1 text-center">
						<h4 className="fs-2 fw-600">
							<img src={logo} alt="logo" />
						</h4>
						<p className="clr-gray max-40ch m-auto">
							ريادة الأفكـار إحدى المؤسسات الرائدة في صناعة المحتوى
							الرقمي، تقدم خدماتها للجهات الحكومية وقطاع الأعمال وللأفراد
							باختلاف شرائحهم، وتحرص على تقديم أعمال إبداعية ذات جودة
							عالية.
						</p>
					</div>
				</div>
			</div>
			<div className="p-1 clr-white bg-tertiary flex-center">
				&copy; جميع الحقوق محفوظة {new Date().getFullYear()}
			</div>
		</footer>
	);
}

export default Footer;

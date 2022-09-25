import React from 'react'
import heroImage from "./../Images/cnqr686.png"

function Hero() {
   return (
		<div className="bg-tertiary p-1">
			<div className="container grid-3 gap-2 p-y-3">
				<div className="flex-center flex-column relative p-y-2 gap-1">
					<div className="absolute w-50 border-white border-5 h-100 r-0 rounded-1"></div>
					<div className="clr-white bg-tertiary z-2 p-y-05">
						<h2 className="fs-125">
							ريادة الأفكار لصناعة المحتوى الرقمي
						</h2>
						<h3 className="fs-2 fw-800">جودة وإبداع</h3>
					</div>
					<p className="clr-white clr-white bg-tertiary z-2 p-y-05 fs-05 max-50ch">
						ريادة الأفكـار إحدى المؤسسات الرائدة في مجال صناعة المحتوى
						الرقمي بالمملكة. نقدم خدماتنا للجهات الحكومية وقطاع الأعمال
						وللأفراد باختلاف شرائحهم، ونحرص على تقديم أعمال إبداعية ذات
						جودة عالية.
					</p>
               <a href="#" className="btn-white z-2 rounded-5">قراءة المزيد</a>
				</div>
				<div className="flex-center">
               <img src={heroImage} alt="Hero Image" />
            </div>
			</div>
		</div>
	);
}

export default Hero
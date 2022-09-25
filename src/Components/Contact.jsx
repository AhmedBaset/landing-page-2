import React from 'react'
import image from  "./../Images/contact-img.png"

function Contact() {
   return (
		<section className="bg-tertiary clr-white p-y-3 relative m-y-3">
			<img src={image} alt="contact us" className="absolute l-0 t-80 w-6 isolate" />
			<div className="container">
				<div className="text-center p-1 p-y-2">
					<h3 className="fs-2">تواصل معنا</h3>
					<p className="fs-05">
						يرجى تعبئة النموذج أدناه، أو التواصل على إيميلنا
						A7med3bdulBaset@gmail.com
					</p>
				</div>
				<form>
					<div className="grid-5 gap">
						<div className="grid-span-2 phone-grid-span-5">
							<input
								className="d-block w-100"
								type="text"
								placeholder="الاسم"
							/>
							<input
								className="d-block w-100 m-y-05"
								type="email"
								placeholder="البريد الإلكتروني"
							/>
							<input
								className="d-block w-100"
								type="text"
								placeholder="نوع الخدمة"
							/>
						</div>
						<div className="grid-span-2 phone-grid-span-5">
							<textarea
								className="d-block w-100 h-100"
								placeholder="تفاصيل الرسالة"
							></textarea>
						</div>
						<div className="flex-center grid-span-1 phone-grid-span-5">
							<button className="btn-secondary p-x-2">إرسال</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Contact
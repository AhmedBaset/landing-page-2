import React from "react";
import cardImage_1 from "./../Images/card-1.jpg";
import cardImage_2 from "./../Images/card-2.jpg";
import cardImage_3 from "./../Images/card-3.jpg";
import cardImage_4 from "./../Images/card-4.jpg";
import cardImage_5 from "./../Images/card-5.png";
import cardImage_6 from "./../Images/card-6.jpg";

function Portfolio() {
	return (
		<section className="linear-gradient-primary-secondary-to-right m-y-3 p-y-3 clr-white">
			<div className="flex-center flex-wrap gap-2 container flex-j-between m-b-1">
				<h3 className="fs-2 fw-800">معرض الأعمال</h3>
				<ul className="flex-center gap-1 list-style-none">
					<li>
						<a className="clr-white" href="#">
							موشن جرافيك
						</a>
					</li>
					<li>
						<a className="clr-white" href="#">
							إنفوجرافيك
						</a>
					</li>
					<li>
						<a className="clr-white" href="#">
							شبكات التواصل
						</a>
					</li>
					<li>
						<a className="clr-white" href="#">
							الإنتاج الصوتي
						</a>
					</li>
				</ul>
				<button className="btn-outline-light rounded-5">
					اكتشف المزيد
				</button>
			</div>
			<div className="grid-3 clr-white container gap">
				<div className="card">
					<img
						src={cardImage_1}
						alt="card image"
						className="card-img ratio-16-9"
					/>
					<div className="card-content bg-white clr-black flex">
						<div className="vertical h-6">23/09/2022</div>
						<div className="flex-grow-1">
							<p className="clr-dark fs-05">جان برجر</p>
							<h4 className="clr-primary">اليوم الوطني</h4>
							<button className="btn-primary m-t-05">اعرف المزيد</button>
						</div>
					</div>
				</div>
				<div className="card">
					<img
						src={cardImage_2}
						alt="card image"
						className="card-img ratio-16-9"
					/>
					<div className="card-content bg-white clr-black flex">
						<div className="vertical h-6">23/09/2022</div>
						<div className="flex-grow-1">
							<p className="clr-dark fs-05">جان برجر</p>
							<h4 className="clr-primary">اليوم الوطني</h4>
							<button className="btn-primary m-t-05">اعرف المزيد</button>
						</div>
					</div>
				</div>
				<div className="card">
					<img
						src={cardImage_3}
						alt="card image"
						className="card-img ratio-16-9"
					/>
					<div className="card-content bg-white clr-black flex">
						<div className="vertical h-6">23/09/2022</div>
						<div className="flex-grow-1">
							<p className="clr-dark fs-05">جان برجر</p>
							<h4 className="clr-primary">اليوم الوطني</h4>
							<button className="btn-primary m-t-05">اعرف المزيد</button>
						</div>
					</div>
				</div>
				<div className="card">
					<img
						src={cardImage_4}
						alt="card image"
						className="card-img ratio-16-9"
					/>
					<div className="card-content bg-white clr-black flex">
						<div className="vertical h-6">23/09/2022</div>
						<div className="flex-grow-1">
							<p className="clr-dark fs-05">جان برجر</p>
							<h4 className="clr-primary">اليوم الوطني</h4>
							<button className="btn-primary m-t-05">اعرف المزيد</button>
						</div>
					</div>
				</div>
				<div className="card">
					<img
						src={cardImage_5}
						alt="card image"
						className="card-img ratio-16-9"
					/>
					<div className="card-content bg-white clr-black flex">
						<div className="vertical h-6">23/09/2022</div>
						<div className="flex-grow-1">
							<p className="clr-dark fs-05">جان برجر</p>
							<h4 className="clr-primary">اليوم الوطني</h4>
							<button className="btn-primary m-t-05">اعرف المزيد</button>
						</div>
					</div>
				</div>
				<div className="card">
					<img
						src={cardImage_6}
						alt="card image"
						className="card-img ratio-16-9"
					/>
					<div className="card-content bg-white clr-black flex">
						<div className="vertical h-6">23/09/2022</div>
						<div className="flex-grow-1">
							<p className="clr-dark fs-05">جان برجر</p>
							<h4 className="clr-primary">اليوم الوطني</h4>
							<button className="btn-primary m-t-05">اعرف المزيد</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;

import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const data = [
	{
		number: 435,
		title: "النصوص المكتوبة",
	},
	{
		number: 364,
		title: "المشاريع التى أنجزت",
	},
	{
		number: 2208,
		title: "المشاهد التي رسمت",
	},
	,
	{
		number: 136,
		title: "الإنفوجرافيك التي تم تصميمها",
	},
];

function Counters() {
	const [isCount, setIsCount] = React.useState(false);

	return (
		<section className="grid-4fr phone-grid-2fr gap-2 container">
			{data.map((item) => (
				<div className="clr-primary p-1">
					<h1>
						<ScrollTrigger
							onEnter={() => setIsCount(true)}
							onExit={() => setIsCount(false)}
						>
							{isCount && (
								<CountUp
									start={0}
									end={item.number}
									duration={
										item.number < 500
											? Math.round(item.number / 150)
											: 4
									}
									delay={0.2}
								/>
							)}
						</ScrollTrigger>
					</h1>
					<p>{item.title}</p>
					<div
						style={{ height: "2px" }}
						className="relative bg-secondary rounded"
					></div>
				</div>
			))}
		</section>
	);
}

export default Counters;

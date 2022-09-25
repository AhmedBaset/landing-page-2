import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPodcast, faPalette, faComputer, faMicrophone, faCopy, faVideo, faCannabis, faFeather } from "@fortawesome/free-solid-svg-icons"
import Service from "./Service";

function Services() {
	return (
		<section className="container">
			<h2 className="clr-secondary">خدماتنا</h2>
			<div className="m-y-2 grid-4 gap">
				<div className="bg-secondary clr-white rounded flex-center p-1 fs-150 gap">
					<FontAwesomeIcon icon={faImages} />
					<h3>المحتوى المرئي</h3>
				</div>
				<div className="bg-secondary clr-white rounded flex-center p-1 fs-150 gap">
					<FontAwesomeIcon icon={faPodcast} />
					<h3>المحتوى الصوتي</h3>
				</div>
				<div className="bg-secondary clr-white rounded flex-center p-1 fs-150 gap">
					<FontAwesomeIcon icon={faPalette} />
					<h3>المحتوى الرسومي</h3>
				</div>
			</div>
			<div className="grid-3">
				<Service
					icon={faComputer}
					title="شروحات استخدام الخِدْمات الإلكترونيّة لمنظمتك"
					desc="لا يكتمل تميّز الخِدْمات الإلكترونيّة التي تقدمها المنظّمة أو الجهة -خاصة كانت أو عامة- ومثاليّتها؛ إلّا بشروحاٍت يسيرة ترافق تلك الخِدْمات، على النحو الذي تقدمه ريادة الأفكار احترافيّة."
				/>
				<Service
					icon={faMicrophone}
					title="محتوى شبكات التواصل الاجتماعي"
					desc="فيديوهات موشن جرافيك تنتج خصّيصًا لمنصّات التّواصل الاجتماعي لتمكين المستخدمين من مُشاركتها بسهولة وعلى نطاق واسع."
				/>
				<Service
					icon={faCopy}
					title="التقارير السنوي أو الفصلية"
					desc={`قدّم تقريرك بصيغة فيديو موشن جرافيك شيّق ومختصر، فقد أصبح "الموشن جرافيك" هو وسيلة عرض تقارير المنظّمات والجهات بدلًا من المطبوعات والمنشورات التقليدية.`}
				/>
				<Service
					icon={faVideo}
					title="إعلانات الفعاليات أو المسابقات"
					desc="الإعلانات المصوّرة أسرع انتشارًا وأكثر جاذبية للمتلقي. استخدِم الفيديو الإبداعي القصير للإعلان عن فعاليّتك أو مُسابقتك، وخبرتنا الطويلة في صناعة الفيديوهات الإعلانية ستمكّنكم من الانتشار والوصول إلى المستهدفين في شبكات التواصل الاجتماعي."
				/>
				<Service
					icon={faCannabis}
					title="الفيديوهات التعليميّة"
					desc="هِيَ فيديوهات بمحتوى تعليمي ذي طابع مختلف في الإلقاء والوسائل، مقارنة بالتعليم التقليدي. وهذا النوع من الفيديوهات هو عَماد عملية التعليم عن بعد، كما أنه وسيلة داعمة للتّعليم المنتظم في كثير من الجامعات."
				/>
				<Service
					icon={faFeather}
					title="الفيديوهات التوعويّة"
					desc="تتميّز الفيديوهات التوعويّة بقِصرِها وباستخدام الأيقونات والرّسوم التوضيحيّة في توجيه رسائل محددة بقالب إبداعيّ. ولذا فقد أصبح الفيديو القصير الإبداعي أحد أهم وسائل التوعية الحديثة، ونحن بدورنا نوفّر لك هذه الخدمة."
				/>
			</div>
		</section>
	);
}

export default Services;

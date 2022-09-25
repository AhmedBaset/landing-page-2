import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Service({icon, title, desc}) {
	return (
		<div className="card">
			<div className="card-content">
				<div className="flex-center">
					<div className="clr-primary fs-250 p-05 flex-center m-x-e-1">
                  <FontAwesomeIcon icon={icon} />
               </div>
               <h3 className="fs-125 fw-600 flex-grow-1">{title}</h3>
				</div>
            <p className="clr-gray-dark fs-75">{desc}</p>
			</div>
		</div>
	);
}

export default Service;

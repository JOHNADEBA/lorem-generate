import { FaAngleDoubleRight } from "react-icons/fa";

const Para = ({ text, id }) => {
	return (
		<div className={id < 2 ? "para" : "para active_para"}>
			<p className="icon">
				<FaAngleDoubleRight />
			</p>
			<p className="text">{text}</p>
		</div>
	);
};

export default Para;

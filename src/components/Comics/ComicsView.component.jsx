import React from "react";
import { ImageFrame, Image } from "./ComicsView.styles";

const ComicsView = ({ title, num, img, alt }) => {
	return (
		<div>
			<h2>{title}</h2>
			<div>
				<ImageFrame href={`https://xkcd.com/${num}`}>
					<Image src={img} alt={alt} title={alt} />
				</ImageFrame>
			</div>
		</div>
	);
};

export default ComicsView;

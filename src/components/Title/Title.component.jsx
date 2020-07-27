import React from "react";
import { TitleContainer, Heading } from "./Title.styles";

const Logo = (
	<a href="https://xkcd.com">
		<img
			src="https://xkcd.com/s/0b7742.png"
			alt="xkcd.com logo"
			height="83"
			width="185"
		></img>
	</a>
);

const Title = () => (
	<TitleContainer>
		{Logo}
		<Heading>A webcomic of romance, sarcasm, math, and language.</Heading>
	</TitleContainer>
);

export default Title;

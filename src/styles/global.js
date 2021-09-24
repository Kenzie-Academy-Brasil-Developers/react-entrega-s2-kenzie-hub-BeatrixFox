import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: 0;
}
:root{
	--back-blue: #4C4ADA;
	--black: #000000;
	--white: #f5f5f5;
	--dark-green: #04561B;
	--details-color: #A0FFF4;
	--font-details-color: #4E5555;
	--icons-color: #C85311;

}
body{
	background-color: var(---back-blue);
	color: var(--black);
}
body,input{
	font-family: "PT Serif", serif;
	font-size: 1rem;
}
input{
	font-family: "Roboto Mono", monospace;
	font-size: 1rem;
}
h1,h2,h3,h4{
	font-family: "Wallpoet", monospace;
	font-weight: 400;
}
button{
	cursor: pointer;
}
a{
	text-decoration: none;
}
`;

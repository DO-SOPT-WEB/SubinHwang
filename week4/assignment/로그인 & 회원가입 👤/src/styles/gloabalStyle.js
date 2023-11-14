import { createGlobalStyle } from "styled-components";
import PPRETENDARD_BOLD from "../assets/fonts/PretendardStd-Bold.woff";
import PPRETENDARD_MEDIUM from "../assets/fonts/PretendardStd-Medium.woff";
import PPRETENDARD_REGULAR from "../assets/fonts/PretendardStd-Regular.woff";
import PPRETENDARD_SEMIBOLD from "../assets/fonts/PretendardStd-SemiBold.woff";

const globalStyle = createGlobalStyle`
* {
    @font-face {
        font-family: 'Pretendard-Bold'; 
        src: url(${PPRETENDARD_BOLD}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Medium'; 
        src: url(${PPRETENDARD_MEDIUM}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Regular'; 
        src: url(${PPRETENDARD_REGULAR}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-SemiBold'; 
        src: url(${PPRETENDARD_SEMIBOLD}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    box-sizing : border-box;
}

#root {
  max-width: 768px;
  margin:0 auto;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, canvas, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
    font-family: 'Pretendard-Regular';
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
button{
  border: none;
  cursor:pointer;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
input{
  border:none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
export default globalStyle;
